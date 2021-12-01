// function teste(){
//     let total =0
//     for(let num of arguments){
//         total += num;
//         console.log(total);
//     }
// }
// teste(1, 2, 3, 4, 5, 12, 7);


// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// function sum(a, b = 4, c=1){            // adicionando valor padrão caso não seja informado o argumento
//     // b = b || 0;

//     console.log(a + b);
// };

// sum(2, '' , 20);            // concatena os valor caso string vazia seja passada

// sum(2, undefined , 20);    // unico jeito de enviar um argumento "vazio" para pegar o valor padrão do b


// function pessoa({nome, sobrenome, idade}){
//     console.log(nome,sobrenome,idade);
// }
// pessoa({nome:'testando', sobrenome:'outro', idade:20});


// function pessoa2([valor1, valor2, valor3,]){
//     console.log(valor1, valor2, valor3);

// }
// pessoa2(['testando', 'denovo', 30])


// function conta(operador, acumulador, numeros){
//     console.log(operador, acumulador, numeros);
// }

// conta('+', 0, [20, 50, 150]);

const calculo = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);  
}; 


calculo('+', 0, 20, 50, 150);


// const teste =(parametro1, parametro2) =>{
//     console.log(arguments);             // arrow function não tem arguments
// };

// teste(1, 3, 5 ,7)

const argumentos=(...args)=>{
    console.log(args);
}
argumentos('+', 1, 3, 5 ,7);