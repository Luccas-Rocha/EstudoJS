// valor por referencia -> apontam pro mesmo lugar na memoria


const nomes = ['eduardo', 'maria', 'joana'];

const novo = [...nomes];        // copia o array pra dentro de outro

nomes[2] = 'joão';

delete nomes[2];     //remove um item mas continua como espaço vazio

console.log(nomes.length);

const removidoFinal = nomes.pop(); 

const removidoIncio = nomes.shift();  // remove do inicio, altera todos os indices do array

nomes.push('Jorge');  //adiciona no final do array

nomes.unshift('first'); //adiciona no inicio

const novo2 = nomes.slice(1,3)   // não pega o ultimo indice  (pegaria o segundo e o terceiro item da lista)


const nomeString = 'string teste para array';

const nomesArray = nomeString.split(' ');

console.log(nomes, removidoFinal, removidoIncio);

const arrayTest = ['teste', 'uno', 'dos']

const nomeArrayParaString = arrayTest.join(' ');

console.log(nomesArray,nomeArrayParaString);