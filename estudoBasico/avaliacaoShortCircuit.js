/*

Falsy values:   // qualquer coisa != dos abaixo devolvem: true
*false
*0
*"" '' ``   /string vazia
*null / undefined
*NaN
*/

console.log('Nome aleatorio' && 0 && 'Maria'); // retorna 0 (o valor falso)
console.log('Nome aleatorio' && true && 'Maria'); // retorna o ultimo valor caso todos sejam verdadeiros

function falaOi(){
    return 'oi';
}

let vaiExecutar = 0;

console.log(vaiExecutar && falaOi());  // se a constante fosse true a função seria executada, retorna 0

let vaiExecutar2 = 'teste';

console.log(vaiExecutar2 && falaOi());  // a função será executada

console(0 || false || null || 'StringAleatoria' ||true );  // retorna 'StringAleatoria'

const corUsuario = null;
const corPadrao = corUsuario || 'red';  // a cor será red caso o usuario não mude a cor


