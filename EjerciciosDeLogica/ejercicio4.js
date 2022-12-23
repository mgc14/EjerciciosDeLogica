// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Coloca un numero: '));
let n1 = 0, n2 = 1, nextTermino;

console.log('Ejercicio 4:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTermino = n1 + n2;

while (nextTermino <= number) {

    // print the next termino
    console.log(nextTermino);

    n1 = n2;
    n2 = nextTermino;
    nextTermino = n1 + n2;
}