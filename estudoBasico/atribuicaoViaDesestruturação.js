/*const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [um, , tres, , , seis, , oito,  ...resto] = numeros;

console.log(um, tres, seis, oito, resto);*/

//                  0        1        2
//                0 1 2    0 1 2    0 1 2
// const numero = [ [1,2,3], [4,5,6], [7,8,9] ];

//const [,[,, seis]] = numero;// atribuição via desestruturação

//console.log(seis);


//const [lista1, lista2, lista3] = numero; // atribuição via desestruturação
//console.log(lista3[2]);
  // ARRAY ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



const pessoa = {
    nome: 'Oliveira',
    sobrenome: 'Gostoso',
    idade: 19,
    endereco: {
        rua: 'Meu coração',
        numero: 69
    }
    
};

const {nome, idade, sobrenome, endereco: {rua, numero}, endereco} = pessoa;  // atribuição via desestruturação
console.log(nome, sobrenome, idade, endereco, rua, numero);

const {nome: n, ...resto} = pessoa;
console.log(n, resto)