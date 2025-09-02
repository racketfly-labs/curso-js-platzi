/*
//como definir los arrays: new Array() or Array()

const fruits = Array('apple', 'lemon', 'orange');// de esta manera podemos declararlo con sus elemento dentro
console.log(fruits);

const justOneNumber = Array(12);//Si solo usamos 1 numero, este sera el tamaño del array
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5);// Al poner mas de 1 número declaramos que el array tiene de elementos varios números
console.log(number);

// Array literal syntax - Usando los corchetes"[]" se entiende que es un array

const simple = [4];
console.log(simple);

const vacio = [];
console.log(vacio);

const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports);

const mixtos = [
    'Puede tener elementos de diferentes tipos',
    true,
    5,
    {
        ingredientes: 'salt', quantity: 'teaspoonful'
    },
    false
];
console.log(mixtos);

//Accessing array elements
const firstFruit = fruits[0];
console.log(firstFruit);

//Length of arrays
const numberOfFruits = fruits.length;
console.log(numberOfFruits);
*/
const fruits = Array('apple', 'lemon', 'orange');

// Mutabilidad de arrays

fruits.push('watermelon');
//console.log(fruits);

// inmutabilidad
const newFruits = fruits.concat(['banana', 'kiwi', 'grape']);
//console.log(fruits);
//console.log(newFruits);

// Uso de Array.isArray();

const esArray = Array.isArray(fruits);
//console.log(esArray);


// Ejercicio practico: Sumar todos los elementos de un array de solo números.
const lista = [1, 2, 3, 4, 6];

let sum = 0;

for (let i = 0; i < lista.length; i++) {
    sum += lista[i];
}
//console.log(sum);



// spread operator -...array- => usando estos 3 puntos podemos manipular los arrays sin modificar los originales
// Pueden ayudarnos a crear copias, a combinar o a crear otro array con elemntos adicionales. Tambien puede pasarle elementos como argumentos a una función

//copia de arrays:
const list = [... lista]; // Asi soluciono el problema que tuvé al iniciar a hacer pruebas con este documento
// list.push(7);             // como cuando hacia: const list = lista, pero al modificar list, tambien cambiaba los items de lista

// console.log(lista);
// console.log(list);

// Combinancion de arrays 
const numeros = [5, 7, 8, 9];
const newList = [...list, ...numeros, 10];
// console.log(list);
// console.log(numeros);
// console.log(newList);

//Pasar elemntos a las funciones. Si la lista tiene mas items que parametros, solo tomara en cuenta los primeros items que necesite de la lista

const suma = (a, b, c, d) => a + b + c + d;
// const resultado = suma(...numeros);
// console.log(suma(1,2,3,5));
// console.log(suma(... numeros));
// console.log(suma(... list));
// console.log(suma(... newList));

// Convertir string en array
const string = 'Hola';
const array = [...string];
console.log(array);// [ 'H', 'o', 'l', 'a' ]