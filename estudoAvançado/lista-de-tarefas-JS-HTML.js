const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');  // seleciona a classe e atribui uma variavel pra mexer nela
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li')
    return li;
}

function criaBotaoApagar(li){
    li.innerText += ' ';            // adiciona espaço entre o texto e o botão apagar
    const botaoApagar = document.createElement('button');       // cria um botão no html
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');              // transforma o botão em 'classe' e nomeia ela como 'apagar'
    botaoApagar.setAttribute('title', 'apagar esta tarefa'); 
//    botaoApagar.classList.add('apagar');           // adiciona uma classe para o botão poder ser selecionado no querySelector
    li.appendChild(botaoApagar);                // faz o botão estar dentro do objeto da lista e não geral
}

function limpaInput(){
    inputTarefa.value = '';            // apaga o input
    inputTarefa.focus();               // seleciona o input para poder digitar direto
}

inputTarefa.addEventListener('keypress', function(e){      // pegando enter como forma de envio no botão
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;    
        criaTarefa(inputTarefa.value);     
        limpaInput();
        
    }
});

function criaTarefa(textoInput){
    const li = criaLi();   // não é redeclaração de variavel pois está dentro de função
    li.innerText = textoInput;
    tarefas.appendChild(li);       // ao adicionar um Li, ele vai direto para o .tarefas no caso a lista de tarefas
    criaBotaoApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;    // se input tarefa der falso, retorne nada  (if apenas com return não precisa de chaves)
    criaTarefa(inputTarefa.value);   
    limpaInput();
});

document.addEventListener('click', function(e){
    const el = e.target;    // pega aonde está sendo clickado na página
    if (el.classList.contains('apagar')){//    se aonde for clickado tiver a classe 'apagar' 
        el.parentElement.remove();            // remove o 'pai'  no caso a Li aonde ele está dentro 
    }
    salvarTarefas();
});


function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');       // dentro de tarefa, seleciona todos os 'li'
    const listaDeTarefas = [];          // cria um array para salvar os textos
    
   
    
    for(let tarefa of liTarefas){          // percorre todos os 'li' dentro da ul 'tarefas' 
        let tarefaTexto = (tarefa.innerText);           // bota o texto numa variavel para apagar o texto do botão
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();   // trim() corta o espaço sobrando no fim (talvez no inicio tbm n sei)
        listaDeTarefas.push(tarefaTexto);           // joga o texto pro fim do array
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); // transforma o array em JSON
    localStorage.setItem('tarefas', tarefasJSON);        // salva a string na memoria do navegador
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');    // adiciona as tarefas do JSON 'tarefas'
    const listaDeTarefas= JSON.parse(tarefas);  // transforma as strings em JSON para objeto JS novamento (array nesse caso)
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);         // usa a o for para percorrer o array e passar cada elemento pela função de criar tarefa
    }
}

adicionaTarefasSalvas();