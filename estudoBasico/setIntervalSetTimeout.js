function mostraHora(){
    let data = new Date();
    return data.getTime('0',{
        hour12:false
    });
}

// function intervalo(){
//   console.log(mostraHora());
// }

// const timer = setInterval(function(){
//     console.log(mostraHora());
// }, 1000);

// setTimeout(function(){
//     clearInterval(timer);
// }, 3000);
// setTimeout(function(){
//     console.log('teste depois de 5segundos')
// }, 5000);




// let horaRelogio = new Date('',{
//     hour12:false
// })

let dataRelogio = new Date();
dataRelogio.setHours(0,0,0,0)
dataRelogio.hour12;

const timer = setInterval(function(){
    console.log(zeroAEsquerda(dataRelogio.getHours()),':',zeroAEsquerda(dataRelogio.getMinutes()),':', zeroAEsquerda(dataRelogio.getSeconds()));
    dataRelogio.getHours()++;
    
}, 1000);

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}