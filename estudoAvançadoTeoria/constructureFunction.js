// Função construtora retorna -> objetos
// função fabrica retorna -> objetos
// Construtora -> Pessoa (new)   //começa com letra maiscula e não usa virgula a cada atributo
// função fabria -> criaPessoa(pessoa)

function Pessoa(nome, sobrenome){
    //atributos ou metodos privados
    const ID = 24125;

    const metodoInterno = function(){

    };
    //atributos ou metodos publicos
    this.nome = nome;

    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' : sou um método')

    }
}
// new cria um objeto vazio, aponta o this evocado como objeto, e retorna
const p1 = new Pessoa("el", "rato");

const p2 = new Pessoa("we go", "again");

console.log(p1.nome);
p2.metodo();