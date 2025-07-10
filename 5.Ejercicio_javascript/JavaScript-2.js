// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

/*
let num1 = parseInt(prompt("Digite el numero 1: "))
let num2 = parseInt(prompt("Digite el numero 2: "))

console.log(`La suma de los numeros ${num1} y ${num2} es: ${num1+num2}`)
*/

// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2025 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 25 años

/*
let añoNacimiento = parseInt(prompt("Digite el año de nacimiento: "))
let nombre = prompt("Digite su nombre: ")

console.log(`Hola ${nombre}, grandioso! Tienes ${2025 - añoNacimiento} años`)
*/

// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no. Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.

/*
let numero = parseInt(prompt("Digite un numero: "))

if(numero % 5 == 0){
    console.log(`El numero ${numero} es múltiplo de 5`)
}else{
    console.log(`El numero ${numero} no es múltiplo de 5`)
}
*/

// Escribe un programa que le pida al usuario ingresar un número. ○ Si el número es múltiplo de 3 debe imprimir en la consola bing. ○ Si el número es múltiplo de 5 debe imprimir en la consola bong. ○ Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong. ○ Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

/*
let numero2 = parseInt(prompt("Digite un numero: "))

if(numero2 % 3 == 0 && numero2 % 5 == 0){
    console.log(`${numero2}: bing bong`)
}else if(numero2 % 3 == 0){
    console.log(`${numero2}: bing`)
}else if(numero2 % 5 == 0){
    console.log(`${numero2}: bong`)
}else{
    console.log(`${numero2}`)
}
*/

//  Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.

/*
let frase = prompt("Digite un frase: ")

for(let i = 0; i < 10; i++){
    console.log(frase)
}
*/

// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces

/*
let frase = prompt("Digite un frase: ")
let num = parseInt(prompt("Digite el numero de veces que se repita la frase: "))

for(let i = 0; i < num; i++){
    console.log(frase)
}
*/

// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir: 5 6 7 8 9 10

/*
let num1 = parseInt(prompt("Digite el numero 1 para iniciar el rango: "))
let num2 = parseInt(prompt("Digite el numero 2 finalizar el rango: "))

for(let i = num1; i <= num2; i++){
    console.log(i)
}
*/

// Crea un programa a partir de las siguientes instrucciones: ○ Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana". ○ Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1. ○ Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor. ○ Recorre el arreglo e imprímelo. ○ Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

/*
const nombres = ["Pedro", " Pablo", " María", " Juan", " Diana"]

let nombreNuevo = prompt("Ingrese un nombre: ")

nombres.push(nombreNuevo)

console.log(`La lista de nombres quedo asi: ${nombres}`)

let nombreNuevo2 = prompt("Ingrese otro nombre: ")

nombres[2] = nombreNuevo2

console.log(`La lista de nombres quedo asi: ${nombres}`)
*/

// Escribe un programa que: ○ Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo) ○ Elimine el segundo elemento. ○ Recorra e imprima el arreglo. Ejemplo:

/*
let numero = parseInt(prompt("Digite el numero para el rango del arreglo: "))

let arreglo = [1]

for(let i = 2; i <= numero; i++){
    arreglo.push(i)
}

arreglo.splice(1,1)

console.log(arreglo)
*/

// Completa el siguiente programa para imprimir los números que sean mayores a 10. const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39] escribe tu código acá El resultado debería ser el siguiente: 23 40 12 67 24 39

/*
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
let arreglo = []

for(i = 0; i < nums.length; i++){
    if(nums[i] > 10){
        arreglo.push(nums[i])
    }
}

console.log(arreglo)
*/

// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo: const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ]; El resultado debería ser el siguiente: 11

/*
const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ]
let contador = 0

for(i = 0; i < nums.length; i++){
    if(nums[i] == 1){
        contador++
    }
}

console.log("El numeros 1 en la lista es: " + contador)
*/

