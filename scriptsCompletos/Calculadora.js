//feita com factory function para treino

function criaCalculadora(){
    
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        
        
        inicia(){
            
            this.clickBotoes();
            this.pressionaEnter();
            
        },
        
        clickBotoes(){
            document.addEventListener('click', function(e){
                const el =e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.display.value = '';
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();
        }.bind(this));      // usa a calculadora como this, ao inves do document
    },
     
    btnParaDisplay(valor){
         this.display.value += valor;

     },
    
     apagaUm(){
         this.display.value = this.display.value.slice(0,-1);
     },

     clearDisplay(){
         this.display.value= '';
     },

     realizaConta(){
       let conta = this.display.value;
       try{
        conta = eval(conta);            // puta cuidado usando eval pode fuder tudo(criar metodos para não permitir nada além de numero e simbolo)
        if(!conta){
            alert('conta invalida');
            return;
        }
        this.display.value=String(conta);
        }catch(e){
            alert('conta invalida');
            return;
       }
     },

     pressionaEnter(){
         this.display.addEventListener('keyup', (e)=>{
             if(e.keyCode === 13){
                this.realizaConta();
             }
         });
     },

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();


// script funcionando em https://auladewebdesign.000webhostapp.com/calculadora/indice.html