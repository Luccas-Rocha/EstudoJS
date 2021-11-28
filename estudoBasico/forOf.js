
//            0123456789
const nome = ['nizro', 'my', 'beloved'];

// for(let i = 0; i <nome.length; i++){   // for classico - geralmente com iteráveis (array ou strings)
//     console.log(nome[i]);
// }

// for(let i in nome){                  // for in - retorna indice ou chave (string, array, objetos)
//     console.log(nome[i]);
// }

// for (let valor of nome){              // for off - retorna valor (iteráveis, array ou strings)
//     console.log(valor)
// }

// nome.forEach(function(elemento,valor,array){
//     console.log(elemento, valor, array);
// });

const pessoa ={
    nome: 'Nizru',
    sobrenome:'beloved'
};

for(let i in pessoa){
    console.log(i,pessoa[i]);
}

