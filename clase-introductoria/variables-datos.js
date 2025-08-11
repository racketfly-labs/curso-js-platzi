//Tipos de datos

//PRIMITIVOS
let esMayorDeEdad = true // Booleano
let nombre = 'Maria' // String
let edad = 25 //number
let noHayValor = null //null
let noDefinido = undefined //undefined
let simboloUnico = Symbol('unico') //symbol
let numeroGrande = 2n //bigint

//COMPLEJOS
let carro = { //Object
    marca: 'tesla',
    modelo: 'Model S'
}
let frutas = ['manzanas','peras','naranjas'] //Array
function saludar(){ //function
    console.log(`${nombre} tiene `,edad)
}
//saludar()

//Manipulación de strings
//Con cualquiera de estas comillas podemos escribir strings
let string1 = 'Hola mundo'
let string2 = "Platzi is awesome"
let string3 = `${string1} sera`//Estas comillas nos sirven para concatenar strings
let string4 = string3 + " " + string2
//console.log(string4)

let frase = 'Numeros y operaciones matematicas'
/*
console.log(frase.length)//Arroja la longitud del string
console.log(frase.toLowerCase())//Convierte el string a minusculas
console.log(frase.toUpperCase())//Convierte el string a mayusculas
console.log(frase.substring(0,4))//Toma solo una parte del string
*/

//NUMEROS Y OPERACIONES MATEMATICAS
//1. Tipo entero y decimal
const entero = 2
const decimal = 3.14
//console.log(typeof entero, typeof decimal)//typeof nos arroja el tipo de variable que tiene acontinuación

//2. Notación cientifica
const cientifica = 5e3

//3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritmeticas
//1. Suma, resta, mult. y div.
const suma = 1+1
const resta = 2-1
const multYDiv = (4*4)/(2*3)

//2. Modulo y exponenciación
const modulo = 2%4
const exponenciacion = 3**2

//3. Precisión
const resultado = 0.1 + 0.2
/*
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)//El triple igual compara no solo el valor, sino tambien el tipo de dato
console.log(resultado == 0.3)//JavaScript no es preciso al hacer este tipo de calculos
*/

//4. Operaciones avanzadas
const raizCuadrada = Math.sqrt(25)
const valorAbsoluto = Math.abs(-21)
const aleatorio = Math.random()
/*
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
*/
