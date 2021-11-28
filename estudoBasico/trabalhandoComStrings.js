// let umaString = "um \"texto\"";
//    indices    01234567   
let umaString = "um texto";
console.log(umaString[5]); // mostra o 'x'

console.log(umaString.charAt(3)); //mostra o 't' 

console.log(`${umaString} concatenado com a string`); 

console.log(umaString.match(/[a-z]/g)) // bota todas as letras minusculas em array

console.log(umaString.replace('um', 'outro')); // troca o um por outro

console.log(umaString.replace(/t/g, 'a')); //troca os 't' por 'a'

console.log(umaString.length); // retorna a quantia de caracteres

console.log(umaString.slice(3, 8)); // corta uma parte do texto

console.log(umaString.split(' ')); // separa a string em arrays

console.log(umaString.toUpperCase); // tudo em maiusculo

console.log(umaString.toLowerCase); // tudo em minusculo