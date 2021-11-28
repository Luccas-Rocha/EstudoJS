
const form = document.querySelector('.form');
form.addEventListener('submit', function(evento){
evento.preventDefault();
    const inputPeso = evento.target.querySelector('.peso');
    const inputAltura = evento.target.querySelector('.altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('altura inválido', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getEstagio(imc);
    
    const msg = `seu imc é de ${imc} ${nivelImc}`;
    setResultado(msg, true);

});

function getEstagio (imc){
    const estagio = ['abaixo do peso', 'peso normal', 'sobrepeso','obesidade 1', 'obesidade 2', 'obesidade 3']
    if (imc >= 39.9){
        return estagio[5];

    }
    
    if(imc >=34.9){
        return estagio[4];    
    }
    if(imc >=29.9){
        return estagio[3];   
    }
    if(imc >=24.9){
        return estagio[2];    
    }
    if(imc >=18.5){
        return estagio[1];
    }
    if (imc < 18.5){
        return estagio[0];
    }
}

function getImc (peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}


function criaP (){
    const p = document.createElement('p');
    
    return p;
    
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    resultado.appendChild(p);
    
    

}
