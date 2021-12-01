function falaOi(){          // function hoisting   (pode chamar a função antes mesmo dela ser criada)
    console.log('oi');
}

// first-class objects (todas funções são objetos de primeira classe)  
// function expression
const souUmDado = function(){
    console.log('sou um dado');
}



function executaFuncao(funcao){
    console.log('vou executar a função abaixo')
    funcao();
}

executaFuncao(souUmDado);

//arrow function = 

const arrowFunction = () => {
    console.log('sou uma ArrowFunction')
};

arrowFunction();

// dentro de um objeto 
const objeto = {
    falar(){
        console.log('falando...')
    }
}
objeto.falar();