// function nombre(parametros(opcional)){
//     cuerpo
//     return(opcional)
// }
// nombre(argumento)-->Llamado de la funcion
//Ejemplo
function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}
const originalPrice = 180000
const percentageOfDiscount = 25
const finalPrice = calculateDiscountedPrice(originalPrice, percentageOfDiscount)

console.log(`Precio original: $` + originalPrice)
console.log(`Descuento: ` + percentageOfDiscount + `%`)
console.log(`Precio final: $` + finalPrice)