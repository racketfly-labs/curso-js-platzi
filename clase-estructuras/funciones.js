// function nombre(parametros(opcional)){
//     cuerpo
//     return(opcional)
// }
// nombre(argumento)-->Llamado de la función
//Ejemplo
/*
function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}
const originalPrice = 180000
const percentageOfDiscount = 25
const finalPrice = calculateDiscountedPrice(originalPrice, percentageOfDiscount)

console.log(`Precio original: $` + originalPrice);
console.log(`Descuento: ` + percentageOfDiscount + `%`);
console.log(`Precio final: $` + finalPrice);
*/
/*
// Funciones vs. Métodos
// Capacidades que tienen las funciones al igual que otros objetos:

// Pasar funciones como argumentos --> Callback
function a () {}
function b () {}
b(a);

// Retornar funciones
function a () {
    function b () {};
    return b;
}

// Asignar funciones a variables --> Expresión de función
const a = function () {}

// Tener propiedades y métodos
function a () {}
const obj = {}
a.call(obj);

// Anidar funciones --> Nested functions
function a () {
    function b () {
        function c () {
            
        }
        c();
    }
    b();
}
a();
*/
// ¿Es posible almacenar funciones en objetos?
// A/:
const rocket = {
    name: `falcon 9`,
    launchMessage: function () {
        console.log(`El cohete ha despegado`);
    }
}
//rocket.launchMessage();

// Resumen de lo aprendido:
// Un método es una función asociada a un objeto específico.
// Los métodos están ligados a un objeto y se llaman en el contexto de ese objeto.
// por lo tanto, un método es esencialmente una función que opera sobre propiedades o comportamientos de un objeto.

// Clase: Funciones puras e impuras
// Funciones puras
// - Dada una misma entrada, vamos a obtener siempre una misma salida
// - No producen efectos secundarios (Side effects).

// Side Effects:
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulación del DOM
// &. Obtener la hora actual

// Ejemplos de función pura:

function sum (a, b) {
    return a + b;
}
function square (x) {
    return x*x;
}
function addTen (y) {
    return y + 10;
}
const number = 3;
const resultado = square(addTen(number));
//console.log(resultado)

// Ejemplos de función impura
let total = 10;
function counter (a) {
    total += a;
    return total;
}
function crecer () {
    console.log(`Crecera 1 año`)
    edad += 1;
    return edad;
}

/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 Ámbito léxico: cada vez que se declara una función,
 crea su propio ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
*/
function outerFunction () {
    let outerVariable = "I am from outer function";

    function interFunction () {
        console.log(outerVariable);
    }

    return interFunction;
}

const closureExample = outerFunction()
//closureExample()

function contador () {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
// const cuenta2 = contador();
// cuenta2()
// cuenta2()
// cuenta2()
// const cuenta1 = contador();
// cuenta1()
function outer () {
    let message = `Hello, `;
    function inner (name) {
        console.log(message, name);
    }
    return inner;
}
const closure = outer()
closure("Alice")
closure("Bob")
