/*
//Operadores de Comparación en JavaScript: Igualdad y Desigualdad
const a = "10";
const b = 20;
const c = 10;
console.log(a==c);
console.log(a===c);
console.log(a!=c);
console.log(b>c);
console.log(a<=b);

//Operadores Lógicos
|| => or
&& => and
!  => not
*/
const a = "10";
const b = 20;
const c = 10;
console.log(a==c && b>c);
console.log(a==c || b<c);
console.log(a===c && b>c);
console.log(!(b>c));

//Estructuras condicionales: if, else, else if
let nombre = "Nicdwd";
if (nombre === "Juan"){
    console.log("Hola ", nombre);
}else if(nombre === "Nico"){
    console.log("Hola ", nombre)
}else{
    console.log("Nombre no encontrado")
}
