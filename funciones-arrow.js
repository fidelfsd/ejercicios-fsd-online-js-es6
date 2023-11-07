const suma = (a, b) => a + b;
const cuadrado = (x) => x ** 2;

const promedio = (...notas) => {
   let suma = 0;
   for (let i = 0; i < notas.length; i++) {
      const element = notas[i];
      suma = suma + element;
   }
   //console.log({ suma });
   return suma / notas.length;
};

// console.log(suma(5, 3));
// console.log(cuadrado(4));
const misNotas = [1, 2, 3, 4, 8, 3];
misNotas.push(10);

console.log(promedio(...misNotas));
// console.log(suma);
