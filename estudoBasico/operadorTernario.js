// ? : 
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000){
    console.log('usuario VIP')
} else{
    console.log('usuario normal')
}

const nivelUsuario = pontuacaoUsuario >=1000 ?'usuario VIP' : 'usuario normal';
console.log(nivelUsuario);