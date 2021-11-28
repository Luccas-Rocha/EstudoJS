const verdadeira = true;

//let tem escopo de bloco {...bloco}

//var só tem escopo de função

let nome = 'luiz'; // criando
var nome2= 'luiz';
var nome2 = 'balu'  // redeclarada

if (verdadeira){
    var nome2 = 'roger'  // redeclarada

    let nome = 'otavio' // criando
    console.log(nome, nome2);
    if (verdadeira){
        var nome2 = 'ronaldo'  // redeclarada

        let nome ='teste'  // criando
        console.log(nome,nome2);
    }
}

function dizOi(){
    var nome3 = 'luiz'    
    
}
console.log(nome3);  // var só ta definida dentro da função
dizOi();