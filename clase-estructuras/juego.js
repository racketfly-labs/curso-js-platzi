//Juego de adivinar el número
const numeroSecreto = Math.floor(Math.random()*10 + 1);

const numeroJugador = parseInt(
    prompt("Adivina el número secreto entre el 1 y 10")
);

console.log(`Este es el número con el que juegas: ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log("Felicidades has acertado");
}else if(numeroJugador < numeroSecreto){
    console.log("El numero secreto es mas alto");
}else{
    console.log("El numero secreto es mas bajo");
}