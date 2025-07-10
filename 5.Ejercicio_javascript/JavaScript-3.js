/*
Sumar elementos de un array:
- Crea una función sumarArray(array) que reciba un array de números y devuelva la suma.
- Ejemplo: sumarArray([1, 2, 3]) → 6.
*/

function sumarArray(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return `La suma de los numeros del array (${array}) es: ${total}`
}

console.log(sumarArray([2,4,3,56,21]))

/*
Encontrar el número mayor:
- Función numeroMayor(array) que retorne el número más grande de un array.
- Ejemplo: numeroMayor([5, 2, 9, 1]) → 9.
*/

function numeroMayor(array){
    let numMayor = array[0]
    for(i = 0; i < array.length; i++){
        if (array[i] > numMayor){
            numMayor = array[i]
        }
    }
    return `El numero mayor de la lista de numero "${array}" es: ${numMayor}`
}

console.log(numeroMayor([5, 2, 9, 1]))

/*
Contar elementos pares:
- Función contarPares(array) que cuente cuántos números pares hay.
- Ejemplo: contarPares([3, 8, 2, 10]) → 3.
*/

function contarPares(array){
    let contador = 0

    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            contador++
        }
    }
    return `La cantidad de numeros pares del ${array} es: ${contador}`
}

console.log(contarPares([3, 8, 2, 10]))

/*
Invertir un array:
- Función invertirArray(array) que retorne un nuevo array invertido.
- Ejemplo: invertirArray(["a", "b","c"]) → ["c", "b", "a"].
*/

const  invertirArray = (array) => { 
    let copia = array
    let nuevoArray = copia.reverse()
    return `El array "${array}" a la inversa es: ${nuevoArray}`
}

console.log(invertirArray(["a", "b","c"]))

/*
Buscar un elemento:
- Función buscarElemento(array,elemento) que devuelva true si el elemento existe.
- Ejemplo: buscarElemento(["rojo","azul"], "azul") → true.
*/

function buscarElemento(array,elemento){
    if(array.includes(elemento) == true){
        return `El elemento "${elemento}" si se encuentra en el array`
    }else{
        return `El elemento "${elemento}" no se encuentra en el array`
    }
}

console.log(buscarElemento(["rojo","azul"], "azul"))

/*
Calcular promedio de notas:
- Función promedioNotas(estudiante) que reciba un objeto estudiante con propiedad notas (array) y devuelva el promedio.
- Ejemplo: promedioNotas({ nombre: "Ana", notas: [80, 90, 70] }) → 80
*/

const estudiante = {
    nombre: "Ana",
    notas: [80, 90, 70]
}

function promedioNotas(estudiante){
    let total = 0
    let promedio = 0
    for (let i = 0; i < estudiante.notas.length; i++){
        total = total + estudiante.notas[i]
    }
    promedio = total/estudiante.notas.length
    if (promedio >= 0 && promedio <= 100){
        return `El promedio de las notas de ${estudiante.nombre} es de: ${promedio}`
    }else{
        return "*** ERROR, EL PROMEDIO NO PUEDE SER NEGATIVO O MAYOR A 100 ***"
    }
}

console.log(promedioNotas({ nombre: "Ana", notas: [80, 90, 70] }))

/*
Filtrar estudiantes aprobados:
- Función aprobados(listaEstudiantes) que reciba un array de objetos (cada uno con nombre y nota) y devuelva un nuevo array con los que tengan nota >= 60.
*/

const estudiantes = [
    {nombre: 'Lucas', nota:60},
    {nombre: 'Maria', nota:75},
    {nombre: 'Jose', nota:30},
    {nombre: 'Felipe', nota:75},
    {nombre: 'Juan', nota:50},
    {nombre: 'Sofia', nota:10},
    {nombre: 'Mariana', nota:95},
    {nombre: 'Pedro', nota:60}
]

function aprobados(listaEstudiantes){
    let estudiantesAprobados = []
    for (let i = 0; i < listaEstudiantes.length; i++){
        if(listaEstudiantes[i].nota >= 0 && listaEstudiantes[i].nota <= 100) {
            if(listaEstudiantes[i].nota >= 60){
                estudiantesAprobados.push(listaEstudiantes[i])
            }
        }
        else{
        return "*** ERROR, EL PROMEDIO NO PUEDE SER NEGATIVO O MAYOR A 100 ***"
        }
    }

    if (estudiantesAprobados.length > 0) {
        console.log("Los siguientes estudiantes aprobaron:");
        for (let i = 0; i < estudiantesAprobados.length; i++) {
            console.log(`Nombre: "${estudiantesAprobados[i].nombre}" (Nota = ${estudiantesAprobados[i].nota})`);
        }
    } else {
        console.log("Ningún estudiante aprobó.");
    }
}

aprobados(estudiantes)

/*
Agregar propiedad a objeto:
- Función agregarPropiedad(objeto, clave, valor) que añada una nueva propiedad a un objeto.
- Ejemplo:
agregarPropiedad({ nombre: "Luis"}, "edad", 25) → { nombre: "Luis", edad: 25 }
*/

const persona = {
    nombre: "Luis"
}

function agregarPropiedad(objeto, clave, valor){
    objeto[clave] = valor
    return objeto
}

console.log(agregarPropiedad({ nombre: "Luis"}, "edad", 25))

/*
Combinar dos objetos:
- Función combinarObjetos(objeto1,objeto2) que una sus propiedades.
- Ejemplo:
combinarObjetos({ a: 1 }, { b: 2 }) → { a: 1, b: 2 }
*/

function combinarObjetos(objeto1,objeto2){
    return {...objeto1, ...objeto2}
}

console.log(combinarObjetos({ a: 1 }, { b: 2 }))

/*
Contar propiedades de un objeto:
- Función contarPropiedades(objeto) que retorne el número de propiedades.
- Ejemplo: contarPropiedades({ a: 1, b:2 }) → 2.
*/

function contarPropiedades(objeto){

    let contador = 0

    for(clave in objeto){
        contador++
    }
    
    return contador
}

console.log( contarPropiedades({ a: 1, b:2 }))

/*
Calcular área y perímetro de un rectángulo:
- Función calcularRectangulo(ancho, alto) que retorne un objeto con area y perimetro.
- Ejemplo: calcularRectangulo(3, 4) → {area: 12, perimetro: 14 }.
*/

function calcularRectangulo(ancho, alto){
    return {area: ancho * alto, perimetro: (ancho * 2) + (alto * 2)}
}

console.log(calcularRectangulo(3, 4))

/*
Buscar el estudiante con la nota más alta:
- Función mejorEstudiante(listaEstudiantes) que reciba un array de objetos estudiante y devuelva el nombre del que tenga la nota más alta.
*/

function mejorEstudiante(listaEstudiantes){

    let mejorNota = 0
    let mejorAlumno = ''

    for(let i = 0; i < listaEstudiantes.length; i++){
        if(listaEstudiantes[i].nota > mejorNota){
            mejorNota = listaEstudiantes[i].nota
            mejorAlumno = listaEstudiantes[i].nombre
        }
    }

    return `(El/La) mejor estudiante este semestre fue ${mejorAlumno} con la calificación de ${mejorNota}`
}

console.log(mejorEstudiante(estudiantes))

/*
Eliminar elementos duplicados de un array:
- Función eliminarDuplicados(array) que retorne un nuevo array sin duplicados.
- Ejemplo: eliminarDuplicados([1, 2, 2,
3]) → [1, 2, 3].
*/

function eliminarDuplicados(array){
    let sinDuplicados = [...new Set(array)]
    return sinDuplicados 
}

console.log(eliminarDuplicados([1, 2, 2,
    3]))

/*
Ordenar array de números (ascendente):
- Función ordenarArray(array) que ordene números sin usar sort().
- Pista: Usa el algoritmo Bubble Sort.
*/

function ordenarArray(array){

    let numeroTemporal
    let HuboIntercambio

    do{
        HuboIntercambio = false
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i+1]){
                numeroTemporal = array[i]
                array[i] = array[i+1]
                array[i+1] = numeroTemporal
                HuboIntercambio = true
            }
        }
    }while(HuboIntercambio)

    return array
}

console.log(ordenarArray([1,3,5,6,2,4]))

/*
Validar contraseña:
- Función validarContraseña(contraseña) que verifique si tiene al menos 8 caracteres, un número y una mayúscula Retorne true o false.
*/

function validarContraseña(contraseña){

    const tieneLongitud = contraseña.length >= 8
    const tieneNumero = /[0-9]/.test(contraseña)
    const tieneMayuscula = /[A-Z]/.test(contraseña)

    if(tieneLongitud && tieneNumero && tieneMayuscula){
        return "Contraseña valida, cumple todos los requisitos"
    }else{
        return "Contraseña invalida, no cumple los requisitos (verifique si tiene al menos 8 caracteres, un número y una mayúscula)"
    }

}

console.log(validarContraseña('AAeciso2931'))

/*
Calcular factorial:
Crea la función factorial(n) que calcule el factorial de un número (ej: 5! = 5*4*3*2*1).
*/

function factorial(n){
    total = 1
    for(let i = n; i >= 1; i--){
        total *= i
    }
    return total
}

console.log(factorial(5))

/*
Generar tabla de multiplicar:
Crea la función tablaMultiplicar(n) que imprima la tabla del n del 1 al 10.
*/

function tablaMultiplicar(n){
    console.log(`TABLA DE MULTIPLICAR DEL NUMERO ${n}`)
    for(let i = 1; i <= 10; i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }
}

tablaMultiplicar(7)

/*
Contar vocales en un string:
- Crea la función contarVocales(texto) que retorne el número de vocales.
- Ejemplo: contarVocales("Hola") → 2.
*/

function contarVocales(texto){
    let contador = 0
    let regex = /[aeiouáéíóú]/i
    for(let i = 0; i < texto.length; i++){
        if(regex.test(texto[i])){
            contador++
        }
    }
    return `La frase ${texto} tiene ${contador} vocales`
}

console.log(contarVocales("Hola"))

/*
Calcular impuestos:
- Crear la función calcularImpuestos(salarios,tasa) que reciba un array de salarios y aplique la tasa de impuesto a cada uno. 
Retorna un nuevo array.
- Ejemplo: calcularImpuestos([1000,2000], 0.1) → [100, 200]
*/

function calcularImpuestos(salarios,tasa){
    let impuestos = salarios.map(salarios => salarios * tasa)
    return impuestos
}

console.log(calcularImpuestos([1000, 2000], 0.1))

/*
Simulador de carrito de compras:
- Función totalCarrito(carrito) que reciba un array de objetos { producto, precio, cantidad, descuento } calcule el total a pagar.
*/

let carritoCompras = [{producto: 'Arroz', precio: 3900, cantidad: 2, descuento: 0.1}, {producto: 'Platano', precio: 1900, cantidad: 3, descuento: 0.15}, {producto: 'Carne', precio: 19900, cantidad: 1, descuento: 0}]

function totalCarrito(carrito){
    let total = 0
    for (let i = 0; i < carrito.length; i++){
        let precioTotal = carrito[i].precio * carrito[i].cantidad
        let conDescuento = precioTotal * (1 - carrito[i].descuento)
        total += conDescuento
    }
    return `El precio total de las compras fue de $${total}`
}

console.log(totalCarrito(carritoCompras));