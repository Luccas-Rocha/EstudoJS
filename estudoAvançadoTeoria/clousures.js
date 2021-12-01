//global
function retornaFunction(nome){
    
    return function(){          // tem acesso a todos os 3 escopos (dela, do pai e global)
        return nome;
    };
}

const funcao = retornaFunction('Pereira');           // funcao recebe a funcao de retornar o nome 
const funcao2 = retornaFunction('Ednaldo');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());