const numeros = [5, 50, 70, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((c, valor) =>{
    
    c += valor          //somando todos os elementos do array 
    
    return c

}, 0)

console.log(total)


const pessoas = [
    {nome: 'Teste', idade: 52},
    {nome: 'Jacófoi', idade:112},
    {nome:'aooooba', idade:19},
    {nome:'jesussss', idade:34},
    {nome:'marian', idade:72},

];

const pessoaVelha = pessoas.reduce((c,  valor) =>{
    if(c.idade > valor.idade){

        
        return c
    }
    return valor
});

console.log(pessoaVelha)