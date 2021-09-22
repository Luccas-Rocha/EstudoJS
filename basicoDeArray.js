const alunos = ['luiz', 'maria', 'joão'];  // array começa com o indice 0 
console.log(alunos[1]);  // mostra o segundo indice da array

alunos[0] = 'felipe'; // troca o primeiro item do array pelo digitado

alunos[3] = 'eduardo'; // adiciona um novo array caso não exista

console.log(alunos.length); // mostra o tamanho do array


alunos[alunos.length] = 'juan'; // ambos adicionam mais um item para o array em ultimo
alunos[alunos.length] = 'pedro'; // ambos adicionam mais um item para o array em ultimo

alunos.push('otavio'); // adiciona em ultimo no array também

alunos.unshift('luiza'); // adiciona em primeiro lugar da array

let removido = alunos.pop(); // remove o ultimo elemento da array (podendo adicionar em uma variavel)
let removido = alunos.shift(); // remove o primeiro elemento da array (podendo adicionar em uma variavel)

console.log(alunos.slice(0, 3)); // mostra os primeiros 3 elementos da array
console.log(alunos.slice(0, -2)); // mostra todos elementos da array menos os 2 ultimos

console.log(typeof alunos); // retorna = object
console.log(alunos instanceof Array); // retorna = true caso seja array

