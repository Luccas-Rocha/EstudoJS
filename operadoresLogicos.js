/*
&& and / e
|| or / ou
! not / não
*/
const expressaoAnd = true && true && true && true; // retorna True
const expressaoOr = false || false || true || false; // retorna true


const usuario = 'Luiz';
const senha = '123456';

let vailogar = usuario === "Luiz"; // true

let vailogar = usuario ==="Luiz" && senha ==="12345"; // false

console.log(!true);  // false
console.log(!!true);  // true