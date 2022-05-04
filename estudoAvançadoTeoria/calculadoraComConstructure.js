function Calculadora(){

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
    
    this.capturaCliques = () => {
        document.addEventListener('click', event =>{
            const el = event.target;
            if(el.classList.contais('btn-num')) this.addNumDisplay(el);
            if(el.classList.contais('btn-clear')) this.clear();
            if(el.classList.contais('btn-del')) this.del();
            if(el.classList.contais('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = (el) => this.display.value+= el.innerText;

    this.clear = () => this.display.value ='';

   this.capturaEnter = () => document.addEventListener('keypress', e =>{
       if(e.keyCode === 13){
        this.realizaConta();
       }
     
   });
   
    
    this.del = () => this.display.value = this.display.value.slice(0,-1);

    this.realizaConta = () =>{
        try{
            const conta = eval(this.display.value)

            if(!conta){
                alert('conta invalida')
                return
            };
            this.display.value = conta;
        }catch(e){
            alert('conta invalida');
            return
        }
    }

}

const calculadora = new Calculadora();

calculadora.inicia();
