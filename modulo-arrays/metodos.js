/*
// Metodos push() y pop() - Mutability - Esto modifica el array original
// Push() -> Además de adicionar al array lo que haya dentro el parentesis, arroja el nuevo tamaño del array
const paises = ['USA', 'Colombia', 'España', 'Madagascar'];
const newPaises = paises.push('Canada', 'Alemania');
console.log(paises);
console.log(newPaises);

// Pop() -> Además de eliminar al array su último elemento, arroja el elemento eliminado del array
const rmPaises = paises.pop();
console.log(paises);
console.log(rmPaises);
*/

// Metodos que iteran sobre el array, pero no lo modifica

// Map() -> Nos permite aplicarle una función a los elementos del array arrojando un nuev array apartir del anterior
const lista = [1, 2, 3, 4, 5];
const numeros = lista;
//const numerosCuadrados = numeros.map(num => num * num);

//const cuadrado = sum => sum*sum;
//const numerosCuadrados = numeros.map(cuadrado);

//function cuadrado(a){return a*a}
//const numerosCuadrados = numeros.map(cuadrado);
//const numerosCuadrados = numeros.map(function cuadrado(a){return a*a});
const numerosCuadrados = numeros.map(num => num*num);
//console.log(numeros);
//console.log(numerosCuadrados);

//forEach() -> itera en los elementos de un array, aplicandole una función a cada elemento, pero no arroja ningun elemnto
const colors = ['red', 'blue', 'black'];
//const cadaColor = colors.forEach(color => console.log(color));

//console.log(colors);
//console.log(cadaColor);

/*Exercise1
const temperaturesInF = [72, 86, 91, 101, 89];
const temperaturesInC = temperaturesInF.map(temp => ((5/9)*(temp -32)).toFixed(0));
console.log('temperaturas en fahrenheit: ', temperaturesInF);
console.log('temperaturas en Celcius: ', temperaturesInC);
*/
/*exercise2
let suma = 0;
numeros.forEach(num => suma += num);
console.log(suma);
*/

// filter() -> Crea un nuevo array con elemntos que cumplan una condición dada por una función

const numbers = [1, 2, 3, 4, 5];
numbers.push(6,7,8,9,10);
// console.log(numbers);
// console.log(lista);
// console.log(numeros);

const evenNumbers = numbers.filter(number => number%2 === 0);
// console.log(numbers);
// console.log(evenNumbers);

// reduce() -> ejecuta una funcion reductora sobre cada elemento de un array, arrojando como resultado un solo valor 

// ejemplo caso 1

const sum = numeros
.map(number => number += 3)
.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
// console.log(numeros);
// console.log(sum);

// Ejemplo caso 2
const words = ['apple', 'lemon', 'bye','apple','orange','bye', 'bye'];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    }else {
        accumulator[currentValue] = 1;
    }
    return accumulator
},{})
// console.log(wordFrecuency);

//ejercicio de reduce()
const list = []
for (let i = 0; i<15; i++) {
    list.push((Math.random()*10).toFixed(0));
}
const ejercicio = list.reduce((accumulator, currentValue) => {
    if(currentValue < 5) accumulator['1-4'] += 1;
    else if (currentValue >= 5 && currentValue < 8) accumulator['5-7'] += 1;
    else accumulator['8-10'] += 1;
    return accumulator;
},{'1-4': 0, '5-7': 0, '8-10': 0})
// console.log(list);
// console.log(ejercicio);

// find() -> Devuelve el valor del primer elemnto del array que cumple la función de prueba porporcionada

const multipleOf5 = [5, 10, 15, 20];

const firstNumberGreaterThan10 = multipleOf5.find(number => number>10);
// console.log(multipleOf5);
// console.log(firstNumberGreaterThan10);

// findIndex() -> devuelve el indice del primer elemento en un array que satisface una condición 
// proporcionada por una función. De no encontrar ningún elemnto que cumpla la condición retornará: -1

const numerosRandom = [1, 3, 4, 10, 21, 12, 31, 2];
const numberIndex = numerosRandom.findIndex(number => number > 10);
// console.log(numberIndex);


// slice() -> crea una copia superficial (shallow copy) de una porción del array, especificada por
// indices de inicio y fin(Sin incluir el fin)

// const words = ['apple', 'lemon', 'bye','apple','orange','bye', 'bye'];
// console.log(words.slice(2));
// console.log(words.slice(2,6));
// console.log(words.slice(0,3));
// console.log(words.slice(2, -1));


