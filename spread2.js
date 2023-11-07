// El operador spread (...) se usa para combinar arrays u objetos.
const numeros1 = [9, 22, 3];
const numeros2 = [4, 50, 6];

const numerosCombinados = [...numeros1, ...numeros2];

const numeros1Copia = [...numeros1];
console.log(numerosCombinados); // [1, 2, 3, 4, 5, 6]
