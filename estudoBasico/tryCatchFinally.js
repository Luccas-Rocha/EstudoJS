// try{// executa quando não há erros
//     //console.log(a)
//     console.log('Abri o arquivo')
//     console.log('manipulei o arquivo')
//     console.log('fechei o arquivo')
//     try{
//         console.log('b');
//     }catch(err){
//         console.log('deu erro')
//     }finally{
//         console.log('sempre executado tbm')
//     }

// }catch(erro){
//     console.log('tratando o erro')
//         // executa quando  há erros
// }finally{
//     console.log('eu sempre sou executado');
// //sempre
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instancia de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit',
        hour12:false
    });
}

try{
    const dataAleatoria = new Date ('01-01-1999 12:56:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratar erro
    // console.log(e);
}finally{
    console.log('tenha um bom dia')
}
