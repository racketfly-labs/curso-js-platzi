// Las arrow function son otra manera de llamar a las funciones
// Nos puede permitir:
//   * Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor
//   * Reducir el código aún más utilizando parámetros
//   * Olvidarse de manejar el contexto this
//   * Simplificar una línea de código para que sea más legible

const greeting = function (name) { // Forma tradicional
    return `Hi ${name}`;
}
const newGreeting = (name) => { // Forma de flecha - Explicita
    return `Hi ${name}`;
}
const newGreetingImplicit = name => `Hi ${name}` // Forma de flecha - Implicita - con solo 1 parametro podemos quitar los parentesis
const newGreetingWithTwoParameters = (name, lastName) => `Hi ${name} ${lastName}` // Al tener mas de un parametro, es necesario colocar los parentesis

// Lexical Binding

let fictionalCharacter = {
    name: `Uncle Benito`,
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}
fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.');
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');//-> undefined says: Beware of Doctor Octopus.
// Con este ejemplo podemos observar que las arrow function no se vincula con el contexto del objeto, por eso no funciona el: this