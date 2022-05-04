//factory function (função fábrica) retorna -> objetos
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,

        sobrenome,
        //getter                    // get permite evocar o imc sem usar função, ele vira um atributo da classe
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){                // muda o valor do atributo podendo ser definido ao invocar a função
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;  // This puxa a pessoa que puxou a função
        },

       altura,

       peso: peso,

       //getter
       get imc(){                       // get permite evocar o imc sem usar função, ele vira um atributo da classe
           const indice = this.peso / (this.altura**2);
           return indice.toFixed(2);
       }
    };
}
// const p1 = criaPessoa('Oli', 'love', 1.65, 55);
// console.log(p1.imc())
const p2 = criaPessoa("el", "rato", 1.84, 120);
p2.nomeCompleto = 'el rato camundongo'
// console.log(p2.nome)
// console.log(p2.sobrenome)
// console.log(p2.nomeCompleto)
// console.log(p2.imc)
// console.log(p2.fala('falando sobre nada'))