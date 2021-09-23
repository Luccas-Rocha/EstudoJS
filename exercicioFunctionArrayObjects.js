function escopo(){
    const form = document.querySelector('.form');
    const pessoas = [];
    const resultado = document.querySelector('.resultado');
    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        function criapessoa(nome, sobrenome, peso, altura){
            return {nome, sobrenome, peso, altura};
        }
        const pessoa1 = criapessoa(nome.value,sobrenome.value,peso.value,altura.value);
        pessoas.push(pessoa1);
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} `
    }   
    form.addEventListener('submit', recebeEventoForm);

}
escopo();


 /*   form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1);
                                                                                outra maneira de fazer maneira de fazer 
        console.log('não foi enviado')
    };
}
*/