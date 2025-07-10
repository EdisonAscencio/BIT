// VARIABLES Y CONSTANTES

// Declara dos variables (nombre y edad) usando let y asígnales tu nombre y edad. Luego, muestra un mensaje concatenado con console.log: "Hola, mi nombre es [nombre] y tengo [edad] años".

let nombre = "Steven"
let edad = 23

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)

// Crea una constante (PI) con el valor de 3.1416 y calcula el área de un círculo (área= π × radio²). Pide el radio con prompt y muestra el resultado con alert.

/* 
const PI = 3.1416
let radio = prompt("Digite el radio: ")

area = PI * radio**2

alert(`El area del circulo con un radio ${radio} es de ${area}²`) 
*/

// STRINGS

// Usa el operador + para unir dos strings: "Hola" y "Mundo". Muestra el resultado.

console.log("Hola " + "mundo")

// Usa el método concat() para unir "JavaScript" y " es divertido". Muestra el resultado.

let mensaje_1 = "JavaScript"
let mensaje_2 = " es divertido"

let mensaje = mensaje_1.concat(mensaje_2)

console.log(mensaje)

// Usa template strings (`) para crear un mensaje que diga: "El resultado de 5 + 7 es [resultado]" (calcula la suma dentro del string).

let resultado = 5 + 7
console.log(`El resultado de 5 + 7 es ${resultado}`)


// ARRAYS

// Crea una lista (frutas) con 3 frutas. Muestra la segunda fruta usando su índice.

let frutas = ['manzana','fresa','banano']
console.log(frutas[1])

// Agrega una fruta al final del array usando push() y muestra el array completo.

frutas.push('pera')

console.log(frutas)

// Elimina el primer elemento del array usando shift() y muestra el array modificado.

frutas.shift()

console.log(frutas)

// Pide al usuario 3 colores (usando prompt) y guárdalos en un array (colores). Luego, muéstralos con console.log. let color = prompt(“Digita un color”);

/*
let color = prompt("Digita un color")
let colores = []

colores.push(color)
color = prompt("Digita un color")
colores.push(color)
color = prompt("Digita un color")
colores.push(color)

console.log(colores)
*/

// Combina dos arrays: a. Crea array1 = [1, 2, 3] y b. array2 = [4, 5, 6]. c. Únelos en un nuevo array (array3) usando concat().

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = array1.concat(array2)

console.log(array3)

// OBJETOS

// Crea un objeto (persona) con propiedades: nombre, edad, ciudad. Muestra cada propiedad usando notación de punto (persona.nombre) y notación de corchetes (persona['edad']).

let persona = {
    ciudad: "Medellin"
}

persona.nombre = "Steven"
persona["edad"] = 23

console.log(persona)

// Modifica una propiedad: Cambia la ciudad de persona y muestra el objeto actualizado.

persona["ciudad"] = "Bogotá"
console.log(persona)

// Agrega una nueva propiedad (profesion) al objeto persona y muéstrala.

persona["profesión"] = "Ingeniero en Multimedia"
console.log(persona)

// Pide al usuario ingresar (nombre, edad) usando el prompt() y crea un objeto (usuario) con ellos.

/*
let Usuario = {
}

Usuario.nombre = prompt("Digite su nombre")
Usuario.edad = prompt("Digite su edad")

console.log(Usuario)
*/

// OPERADORES

// Calcula el resto de dividir 15 entre 4 usando el operador módulo (%).

let modulo = 15 % 4
console.log(modulo)

// Compara dos números ingresados por el usuario (num1, num2) y muestra cuál es mayor o si son iguales.

/*
let numero1 = parseInt(prompt("Digite el numero 1: "))
let numero2 = parseInt(prompt("Digite el numero 2: "))

if (numero1 > numero2){
    console.log(`El numero 1: ${numero1} es mayor que el numero 2: ${numero2}`)
}else if(numero1 < numero2){
    console.log(`El numero 2: ${numero2} es mayor que el numero 1: ${numero1}`)
}else{
    console.log("Los numeros son iguales")
}
*/

// Verifica si un número ingresado por el usuario es positivo, negativo o cero.

/*
let numero = parseInt(prompt("Digite un numero: "))

if (numero > 0){
    console.log(`El numero: ${numero} es positivo`)
}else if (numero < 0){
    console.log(`El numero: ${numero} es negativo`)
}else{
    console.log(`El numero es cero`)
}
*/

// Usa operadores lógicos (&&, ||): Pide al usuario su edad y verifica si está entre 

/*
18 y 65 años (para "puede trabajar").

let Edad = prompt("Digite su edad: ")

let puedeTrabajar = (Edad >= 18 && Edad <=65) ? "Puede trabajar" : "No puede trabajar"

console.log(puedeTrabajar)
*/

// CONDICIONALES

// Juego de adivinanza: a. Genera un número aleatorio entre 1 y 10. Puedes hacerlo así: const aleatorio = Math.floor(Math.random() * 10) + 1; b. Pide al usuario que adivine el número. c. Usa condicionales para decirle si acertó o no.

/*
const aleatorio = Math.floor(Math.random() * 10) + 1

let numeroJuego = parseInt(prompt("Digite e intente adivinar el numero del 1 al 10: "))

if (numeroJuego == aleatorio){
    console.log(`¡Felicidades, adivinaste el numero!. El numero era el ${aleatorio}`)
}else if(numeroJuego <= 0 || numeroJuego > 10){
    console.log(`*** Digite un numero dentro del rango del 1 al 10 ***`)
}else{
    console.log(`¡Lo siento, intenta nuevamente!. El numero era el ${aleatorio}`)
}
*/

// Operador ternario: Pide al usuario un número y muestra "Par" o "Impar" usando un operador ternario.

/*
let numero = parseInt(prompt("Digite un numero: "))

let parOimpar = (numero % 2 == 0) ? "El numero es par" : "El numero es impar"

console.log(parOimpar)
*/

// SWITCH

// Día de la semana a. Pide al usuario un número del 1 al 7 (usando prompt). b. Usa switch para mostrar el nombre del día correspondiente (1 = Lunes, 2 = Martes, etc.). c. Si el número no está entre 1 y 7, muestra "Día no válido" (usando default).

/*

let numeroSemana = parseInt(prompt("Digite un numero del dia de la semana (1 al 7): "))

switch(numeroSemana){
    case 1:
        console.log("1. Lunes")
        break
    case 2:
        console.log("2. Martes")
        break
    case 3:
        console.log("3. Miercoles")
        break
    case 4:
        console.log("4. Jueves")
        break
    case 5:
        console.log("5. Viernes")
        break
    case 6:
        console.log("6. Sabado")
        break
    case 7:
        console.log("7. Domingo")
        break
    default:
        console.log("Día no válido")
}

*/

// Calculadora con switch a. Pide al usuario: i. Un número (num1). ii. Otro número (num2). iii. Una operación (+, -, *, /). b. Usa switch para calcular y mostrar el resultado de la operación. c. Si la operación no es válida, muestra "Operador desconocido" (default).

/*
let numero_1 = parseInt(prompt("Digite el numero 1: "))
let numero_2 = parseInt(prompt("Digite el numero 2: "))
let operar = prompt("Digite el signo de la operación que desea hacer (+, -, *, /): ") 

switch(operar){
    case "+":
        console.log(`La suma del numero ${numero_1} y ${numero_2} es ${numero_1 + numero_2}`)
        break
    case "-":
        console.log(`La resta del numero ${numero_1} y ${numero_2} es ${numero_1 - numero_2}`)
        break
    case "*":
        console.log(`La multiplicación del numero ${numero_1} y ${numero_2} es ${numero_1 * numero_2}`)
        break
    case "/":
        console.log(`La división del numero ${numero_1} y ${numero_2} es ${numero_1 / numero_2}`)
        break
    default:
        console.log(`*** OPCIÓN INVALIDA, INTENTE NUEVAMENTE ***`)
}
*/