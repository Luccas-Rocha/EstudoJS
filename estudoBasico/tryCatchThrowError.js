// try{
//     console.log(naoExisto);

// }catch(erro){
//     console.log('nãoExisto não existe');
//     console.log(erro);
// }

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x or y are not numbers');
    }
    return x+y;
}
try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));

}catch(erro){
    // console.log(erro);
    console.log('eita deu erro');
}