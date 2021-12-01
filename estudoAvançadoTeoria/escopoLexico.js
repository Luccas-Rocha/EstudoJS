const nome = 'teste';

function falaNome(){
    
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'outro nome'
    falaNome();
}
usaFalaNome();