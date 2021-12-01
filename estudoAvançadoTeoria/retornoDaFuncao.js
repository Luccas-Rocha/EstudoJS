// // return ->retorna um valor e termina a função
// // 
// function soma(a,b){
//     return a+b;
// }

// function soma2(a, b){
//     console.log(a + b)  // exibe a soma, porém não retorna o valor em si
// }
// soma2(2, 5);


// document.addEventListener('click', function(){  // function não retorna nada porem executa o código mesmo assim
//     document.body.style.backgroundColor='red';
// });

// function criaPessoa(nome, sobrenome){
//     return{nome, sobrenome};
//     }
// const pessoa1=criaPessoa('teste', 'maneiro')  
// // é igual a
// const pessoa2 ={
//     nome:'teste',
//     sobrenome:'maneiro'
// };

// console.log(pessoa1);       // mesmo objeto
// console.log(pessoa2);       // mesmo objeto

// console.log(typeof pessoa1);        // mesmo tipo
// console.log(typeof pessoa2);        // mesmo tipo

// function falarFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' '+ resto;
//     }
//     return falaResto;
// }

// const fala = falarFrase('olá');     // guarda o parametro passado e transforma a const fala em uma função
// const resto = fala('mundo!');       // usa a const fala como a função falaResto 
// console.log(resto)

// function duplica(n){
//     return n*2;
// }
// function triplica(n){
//     return n*3;
// }
// function quadriplica(n){
//     return n*4;
// }

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
   
}
const duplica = criaMultiplicador(2);           // duplica, triplica e quadriplica, passam a ser funções pelo return, mantendo
                                                // o multiplicador passado em sua criação.
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(2), triplica(2), quadriplica(2));