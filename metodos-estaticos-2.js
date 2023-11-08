// Definir clase Persona
class Persona {
   #nombre;
   #edad;
   static #cantidadPersonas = 0;
   constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
      Persona.#cantidadPersonas++;
   }

   saludar() {
      console.log(`Hola, soy ${this.#nombre} y tengo ${this.#edad} años`);
   }

   static cantidadPersonas() {
      return Persona.#cantidadPersonas;
   }
}

// Crear una instancia de Persona
const persona1 = new Persona("Juan", 30);
persona1.saludar();

const persona2 = new Persona("Ana", 40);
persona2.saludar();

const persona3 = new Persona("Bob", 60);

console.log(Persona.cantidadPersonas());
