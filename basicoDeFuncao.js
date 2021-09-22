function saudacao(nome){
    return  `bom dia ${nome}`; // retorna a frase completa para ser armazenada em uma variavel

}

const variavel =  saudacao('Felipe');

function soma(x, y){
    const resultado = x + y;  // faz a soma de 2 numeros
    return resultado;
}
console.log(soma(5,8));

const raiz = function (n){
    return n ** 0.5;
};
