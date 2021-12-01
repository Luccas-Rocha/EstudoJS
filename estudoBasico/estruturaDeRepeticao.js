const frutas = ['maça', 'banana', 'uva', 'jabuticaba'];

for(let i in frutas){   // for in -> lê os indices do array ou as chaves do objeto
    console.log(frutas[i])
}

const pessoa = {
    nome: 'somebody',
    sobrenome:'my beloved',
    idade:69
};

for (let chave in pessoa){
    console.log(chave,':',pessoa[chave])
}

// for (let i = 0; i<frutas.length; i++){
//    console.log(frutas[i]);
//}