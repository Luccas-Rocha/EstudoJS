/*
primitivos (imutáveis) - string, number boolean, undefined, null (bigint, symbol) 
= valores copiados 

*/

let nome = 'luiz';
nome[0] = 'r';  // não muda o valor
console.log(nome[0]);

let a = 'a';
let b = a;  // copiando o valor
a = 'c';
console.log(a, b); // b continua com o valor antigo de a

/*
referencia (mutavel) - arrays, objects e functions
= valores por referencia

*/
let array1 = [1, 2 ,3];
let array2 = array1; // array2 passa a apontar no mesmo lugar da memoria do array1
array1.push(4);  // altera os 2 valores
console.log(array1, array2);

let array3 = [...array1]; // COPIA os valores do array ao inves de fazer referencia


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const pessoa2 = {...pessoa1};  // copia o valor, alterar pessoa2 não altera pessoa1
pessoa1.nome = 'João';
const pessoa2 = pessoa1;  // faz referencia ao valor, alterar pessoa2 altera pessoa1


