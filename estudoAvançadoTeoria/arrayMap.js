const numeros = [5, 50, 70, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroDobrado = numeros.map((valor) => valor * 2);

console.log(numeroDobrado);




const pessoas = [
    {nome: 'Teste', idade: 52},
    {nome: 'Jacófoi', idade:112},
    {nome:'aooooba', idade:19},
    {nome:'jesussss', idade:34},
    {nome:'marian', idade:72},

];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes)

const idades = pessoas.map((obj) =>  ({Idade:obj.idade}));

console.log(idades)



const pessoasComId = pessoas.map((obj,indice) =>{
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj
});

console.log(pessoas)
console.log(pessoasComId)