const nome = prompt("qual o seu nome completo? ");

const nomeJunto = nome.replace(' ', '');


document.body.innerHTML += ` o seu nome é: ${nome} <br/> `;
document.body.innerHTML +=  ` o seu nome tem ${nomeJunto.length-1} letras <br/> `;
document.body.innerHTML += ` a segunda letra do seu nome é: ${nome[2]} <br/> `;
document.body.innerHTML += ` qual o primeiro índice da letra "a" no seu nome? ${nomeJunto.indexOf('a')+1} <br/> `;
document.body.innerHTML += ` qual o ultimo índice da letra "a" no seu nome? ${nomeJunto.lastIndexOf('a')}<br/> `;
document.body.innerHTML += ` as ultimas 3 letras do seu nome são ${nomeJunto.slice(-3)} <br/> `;
document.body.innerHTML += ` as palavras do seu nome são ${nome.split(' ')}  <br/> `;
document.body.innerHTML += ` o seu nome com letras maiusculas ${nome.toUpperCase} <br/> `;
document.body.innerHTML += ` o seu nome com letras minusculas ${nome.toLowerCase} <br/> `;
