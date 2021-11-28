//const tresHoras = 60 * 60 * 3 * 1000; // a data vem em milisegundos
//const umDia = 60 * 60 * 24 * 1000;
// const date = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

//const date = new Date(2019, 3, 20, 15, 14,); // a, m , d , h , M , s , ms 
const date = new Date('2019-04-20 17:20:59.100');
console.log('Dia', date.getDate());
console.log('Mês', date.getMonth()+1);
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Min', date.getMinutes());
console.log('Seg', date.getSeconds());
console.log('ms', date.getMilliseconds());
console.log('Dia semana', date.getDay());  // 0 - domingo, 6- sabado
console.log(Date.now);  // data atual em milisegundos

console.log(date.toString());

