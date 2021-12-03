// factory function (função fábrica)
// constructor function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return{
    nome, 

    sobrenome,
        //getter
    get nomecompleto(){
        return `${this.nome} ${this.sobrenome}`
    },

    // setter
    set nomecompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        console.log(valor);
    },

    fala(assunto = 'falando sobre nada'){
        return `${this.nome} está ${assunto}`;
        },

    altura,

    peso,

    //getter
    get imc(){
        const indice = this.peso / (this.altura **2);
        return indice.toFixed(2);
    }
    };
}
const p1 = criaPessoa('oliveira', 'the one', 1.60, 65);
const p2 = criaPessoa('lebron', 'jaiminho', 1.94, 102);


// console.log(p1.fala('falando algo'));
// // console.log(p1.imc()); deixa de ser função e passa a ser atributo com o get
// console.log(p1.imc);

// console.log(p2.fala('falando algo'));
// // console.log(p2.imc()); deixa de ser função e passa a ser atributo com o get
// console.log(p2.imc);
p1.nomecompleto = 'testando o brabo';
// console.log(p1.nome + ' ' + p1.sobrenome);
console.log(p1.nome)
console.log(p1.sobrenome);
console.log(p1.fala());