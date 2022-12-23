function factorial(n){
    if(n==0){
        return 1;

    }
    return n * factorial(n-1)
}

let numero = Number(prompt("ingrese el numero a sacar factorial"))
console.log(factorial(numero));

//En esta seccion se esta realizando una formula que se va a llamar a si misma
//para poder realizar la operacion solicitada de manera continua hasta llegar
//al numero solicitado

/* let total = 1
for (i=1;1<=n;i++){
    total=total*1
}
console.log(total);
Es otra forma de solucionarlo con ciclos*/