// function maior(x, y){
//     if (x>y){
//         console.log(`${x} é maior que ${y}`);
//     }
//     else if (x<y){
//         console.log(`${y} é maior que ${x}`);
//     }
//     else if (x===y){
//         console.log(`${y} é igual a ${x}`);
//     }
//     else{
//         console.log('numero invalido');
       
//     }

// }

// maior(7,123);



// function max(x,y){
//     if(x >y){
//         return x;
//     }
//     return y;
// }



// const max2 = (x, y) => x>y ? x : y;

// console.log(max2(2,20))

// const paisagem = (largura,altura) => largura>altura;
// console.log(paisagem(1080, 720));

const palavra= ''


function exer(num){
    if (Number.isInteger(num) !== true)
        return 'não é um numero';
        
        if (num <0 || num >100){
            return 'numero invalido';
        }
    
        if (num % 3 === 0 && num % 5 === 0){
            return palavra + 'FizzBuzz';
        }
        if (num % 5 === 0 ){
            return palavra + 'Buzz';
        }
        if (num % 3 === 0 ){
            return palavra + 'Fizz';
        }
        if (num % 3 !== 0 && num % 5 !== 0){
            return num;
        }
    
    }





for(let i = 0; i<=100; i++){
    console.log(i,exer(i));
}