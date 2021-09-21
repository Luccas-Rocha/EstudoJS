let num = Number(prompt("Digite um numero: "));
let inteiro = Number.isInteger(num);

document.body.innerHTML +=  `<strong> seu numero é: ${num} <br/> </strong>` ;

document.body.innerHTML += `a raiz quadrada: ${num**0.5} <br/>`;

document.body.innerHTML += ` é inteiro: ${inteiro}<br/>`;

document.body.innerHTML += ` é NaN: ${Number.isNaN(num)} <br/> `;

document.body.innerHTML += ` arredondado para baixo: ${Math.floor(num)}<br/>`;

document.body.innerHTML += ` arredondado para baixo: ${Math.ceil(num)}<br/>`;

document.body.innerHTML += ` com duas casas decimais: ${num.toFixed(2)}<br/>`;

