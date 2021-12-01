// IIFE -> immediately invoked function expression
// (function(){
//    const nome = 'teste';
//    console.log(nome);
// })();

// const nome = 'outro nome';

(function(idade, peso, altura){
    const sobrenome = 'oliveira';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('teste'));
    }
    falaNome();
    console.log(idade, peso, altura);

    
})(30, 80, 1.80);

const nome = 'qualquer coisa';  // não vai ser usado