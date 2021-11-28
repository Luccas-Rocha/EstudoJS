function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-Br',{
        hour12:false
    });
}

// function intervalo(){
//   console.log(mostraHora());
// }

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);
setTimeout(function(){
    console.log('teste depois de 5segundos')
}, 5000);
