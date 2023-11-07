// La desestructuración permite asignar propiedades de objetos a variables.
const persona = { nombre: "María", edad: 30, altura: 160 };

// let nombre = persona.nombre;
// let edad = persona.edad;
// let altura = persona.altura;

let { altura, nombre, edad } = persona;

console.log(nombre);
console.log(edad);
console.log(altura);
