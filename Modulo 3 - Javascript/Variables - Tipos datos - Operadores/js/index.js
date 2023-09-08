/************ Ejercicio 1 - Declaracion de Variables****************/
let edad;
let peso;

//console.log(edad);
//console.log(peso);

/************ Ejercicio 2 - Almacenando datos****************/

edad = 31;
peso = 53;

console.log(edad);
console.log(peso);

/************ Ejercicio 3 - Otro tipo de dato****************/
const saludo = "Hola Mundo!";

console.log(saludo);

/************ Ejercicio 4 - Almacenando valores****************/
let numeroA = 30;
let numeroB = 45;
const aux = numeroA;

console.log("NumeroA = "+numeroA);
console.log("NumeroB = "+numeroB);

numeroA = numeroB;
numeroB = aux;

console.log("NumeroA = "+numeroA);
console.log("NumeroB = "+numeroB);


/************ Ejercicio 5 - Mas datos de datos****************/
const meGustaElHelado = true;
console.log("¿Te gusta el helado? "+meGustaElHelado);

/************ Ejercicio 6 - Variables y operadores****************/
const suma = 5 + 10;
console.log("5 + 10 = "+suma);

const resta = 20 - 5;
console.log("20 - 5 = "+ resta);

const multiplicacion = suma * resta;
console.log(multiplicacion);

const comparar = 2 > 1;
console.log("¿Es 2 es mayor que 1? "+comparar);

const comparar_2 = 1 > 1;
console.log("¿Es 1 es mayor que 1? "+ comparar_2);
