/*
    switch(expresion){ //==> en esta exprecion js utiliza la comparacion === para cada case
        case valor1:
            //Instrucciones
            break;
        case valor2:
            //Instrucciones
            break;
        case valor3:
            //Instrucciones
            break;
        case valor4:
            //Instrucciones
            break;
        default:
            //Codigo en caso que no
    }
*/
/*
//Ejemplo de la clase
let expresion = "peras"

switch (expresion){
    case "mangos":
        console.log("Los mangos cuestan $1.200 la libra");
        break;
    case "naranjas":
        console.log("Las naranjas cuestan $1.100 la libra");
        break;
    case "uvas":
    case "papayas":
        console.log("Las uvas y las papayas cuestan $1.600 la libra");
        break;
    default:
        console.log(`No contamos con ${expresion}`);
}
console.log("¿Desea algo mas?");
*/
//Ejemlplo propio (Practica)
function diaDeLaSemana(){
    let dia = prompt("¿Qué día es hoy?").toLowerCase()

    switch(dia){
        case "lunes":
            console.log("Es lunes, ánimo esta semana.");
            break;

        case "martes":
            console.log("Es martes, sigue con energía.");
            break;

        case "miércoles":
            console.log("Es miércoles, mitad de semana.");
            break;

        case "jueves":
            console.log("Es jueves, casi viernes.");
            break;

        case "viernes":
            console.log("Es viernes, fin de semana a la vista.");
            break;

        case "sábado":
            console.log("Es sábado, día de descanso.");
            break;

        case "domingo":
            console.log("Es domingo, recargando energías.");
            break;

        default:
            let diaCapitalizado = dia.charAt(0).toUpperCase()+dia.slice(1);
            console.log(`${diaCapitalizado} no es un día de la semana.`);
    }
}
diaDeLaSemana()