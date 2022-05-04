recursiva = (max)=>{
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max)

}

//recursiva(0);


// fatorial = (max)=>{
//     if(max <= 1) return 1;
//     if(max = 0){
//         console.log('somente numeros validos')
//     }
//     if(max < 0){
//         console.log('somente numeros positivos')
//     }

//     console.log(max*fatorial(max-1))
// }

// fatorial(5)


fatorial = (n) =>{
    //caso base
    if(n == 1){
        return 1
    }
    //caso recursivo
    return n * fatorial(n-1)

}

console.log(fatorial(5))

countdonw = (num) =>{
    console.log(num)
    if(num == 0 ){
        return 0 
    }
    
    return countdonw(num-1) 
    
}

// console.log(countdonw(27))

fibonacci = (num, array= [0, 1]) =>{
    if(num <=2){
        const [nextToLast, last] = array.slice(-2);
        return fibonacci(num-1, [...array,nextToLast+last]);
    }
}
console.log(fibonacci(12))