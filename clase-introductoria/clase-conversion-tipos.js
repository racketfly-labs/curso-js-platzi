/*
// Explicit Type Casting
const string = `42`
const integer = parseInt(string)
console.log(string, integer)
console.log(typeof string, typeof integer)

const stringDecimal = `3.14`
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const stringBinario = `111010`
const decimal = parseInt(stringBinario, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting
const sum = `5` + 3
console.log(sum, typeof sum)

const sumWhitBoolean = `2` + true
console.log(sumWhitBoolean, typeof sumWhitBoolean)

const sumWhitNumber = 3 + true
console.log(sumWhitNumber, typeof sumWhitNumber)
*/
const stringValue = `10`
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)
