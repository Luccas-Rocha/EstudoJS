let num1 = 1400;
let num2 = 2.5; 

console.log(num1.toString() + num2); // concatenação dos numeros
console.log(num1.toString(2)); // mostra a versão binaria do numero
console.log(num1.toFixed(2)); // mostra 2 casas decimais
console.log(Number.isInteger(num1)); // checa se o numero é inteiro (true or false)
console.log(Number.isNaN(num1)); // Checa se o numero é um numero ou não (false = é um numero)


/*
num1 = 0.1
num2 = 0.7

num1 + num2 = 0.79999999999

maneiras de resolver: 
precisa fazer parseFloat+toFixed ou Number+toFixed para o numero ficar correto 

*/

