// filter, map, reduce

const numeros = [50, 90, 1, 2, 3, 4, 5, 11, 12, 70, 52];

const numerosFiltrados = numeros.filter((valor) => valor > 10);

console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Teste', idade: 52},
    {nome: 'Jacófoi', idade:112},
    {nome:'aooooba', idade:19},
    {nome:'jesussss', idade:34},
    {nome:'marian', idade:72},

];

const pessoasNomeGrande = pessoas.filter((valor) => valor.nome.length > 6 )
console.log(pessoasNomeGrande)

const pessoasTerminaComA= pessoas.filter((valor) => valor.nome.endsWith('a'))

console.log(pessoasTerminaComA)