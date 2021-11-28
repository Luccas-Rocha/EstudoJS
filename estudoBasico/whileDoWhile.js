// const nome = 'Oliver';
// let i = 0;

// while(i<nome.length){
//     console.log(nome[i]);
//     i++;
// }

function random(min, max){
    const r = Math.random() * (max - min) + min;  // gera numero entre o valor minimo e o maximo
    return Math.floor(r);
}

let rand = random(1, 50);

const min = 1;
const max = 50;

let c = 0;



while (rand !== 10){
    rand = random(min,max);
    c++
}console.log(`você achou o ${rand} no total de ${c} tentativas`);

do  {
    rand = random(min,max);
    c++

}while(rand!==10);
console.log(`você achou o ${rand} no total de ${c} tentativas`);
