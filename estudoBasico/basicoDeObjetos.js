/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/
function criapessoa(nome,sobrenome,idade){
    return { nome, sobrenome, idade};
}

const pessoa2 = criapessoa('Luiz','Otavio', 25);
console.log(pessoa2.idade);
const pessoa3 = criapessoa('Maria', 'Oliveira', 50);
console.log(pessoa3.idade);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

fala() {
    console.log(`${this.nome} diz: a minha idade atual é: ${this.idade}`)

},

incrementaidade(){
    this.idade++;

}
}

pessoa1.fala();
pessoa1.incrementaidade();
pessoa1.fala();