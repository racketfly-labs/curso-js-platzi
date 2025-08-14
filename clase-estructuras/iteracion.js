// Estructura del for:
// for(variable, condición, incremento){
//     codigo a ejecutar
// }
/*
let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i<list.length; i++){
    console.log(list[i]);
}*/
// for of ==> arrays, strings [algo]
// Solo va a funcionar cuando tengamos ibjetos iterables
// for (variable of objeto){
//     codigo
// }
/*
let canasta = ["manzana", "pera", "uva", "naranja", "mango"];
for (fruta of canasta){
    console.log(fruta);//¡Tener cuidado! intuitivamente cometi el error de colocar: console.log(canasta[fruta])
}*/

// for in ---> objetos: estructura de datos con propiedades y valor 
//   objetos             !=         array, string
//      ^                                 ^
//      |                                 |
//  propiedad=valor                     items
// for (variable in objeto){
//     codigo
// }
/*
const listaMercado = {
    cebolla: 4,
    tomate: 6,
    papa: 5,
    leche: 2,
    pasta: 1
}
for (producto in listaMercado){
    console.log(producto);//Usandola asi, funciona como el for of, pero el for of no se puede usar en objetos,
}
for (producto in listaMercado){
    console.log(`${producto}: ${listaMercado[producto]}`);
}*/
// while(condicion){
//     codigo
// }
// Ejemplo:
let contador = 0;
while (contador < 10){
    console.log(contador);
    contador++;
}
// do{
//     codigo
// }while(condicion)
let contadorA = 0;
do{
    console.log(contadorA)
    contadorA++;
}while(contador<0)