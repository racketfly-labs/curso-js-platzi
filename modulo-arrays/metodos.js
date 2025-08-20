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

