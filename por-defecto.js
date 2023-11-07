let getPrecioFinal = (precio, impuesto = 0.7) => precio + precio * impuesto;

console.log(getPrecioFinal(500));
