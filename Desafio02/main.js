let nombCompr = prompt("¡Bienvenido/a comprador/a a la página! \n ¿Cuál es su nombre: ")
let nombreProducto = prompt("Díganos "+nombCompr+", ¿Cuál es nombre del producto que desea?")
let precioUnitario = prompt("Ahora cuentenos: ¿Cual es el precio unitario por cada unidad de ese producto?")
let cantidadDeseada = prompt ("Por último cuentenos cuánto unidades desea")

let costoTotal = parseInt(cantidadDeseada * precioUnitario) 

alert(`Le contamos señor/a ${nombCompr} que para la cantidad de ${cantidadDeseada} del producto ${nombreProducto}, con un precio de $${precioUnitario} de cada uno, tendrá que pagar $${costoTotal}`)