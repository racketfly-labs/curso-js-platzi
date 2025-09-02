/**
 * Un objeto es una estructura de datos que me ayuda a guardar 
 * valores de una forma particular
 
 * Key / Value
 * propiedad = valor
    
    objeto{
        propiedad: valor,
        propiedad2: valor,
        .
        .
        Metodos  -->funciones que nos ayudaran a interactuar con el objeto
    }
 */
//Ejemplo
const persona = {
    nombre: 'Juan',
    edad: 25,
    direccion: {
        ciudad: 'cali',
        barrio: 'las vegas',
        dir: 'calle 5 #89-137'
    },
    saludar(){
        console.log(`Hola me llamo ${persona.nombre}`)
    }
}
persona.saludar()