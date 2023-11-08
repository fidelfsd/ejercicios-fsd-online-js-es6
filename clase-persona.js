// Definir clase Persona
class Persona {
    
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      console.log("Hola desde el constructor");
   }

   saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
   }
}

// Crear una instancia de Persona
const persona1 = new Persona("Juan", 30);
persona1.saludar();

const persona2 = new Persona("Ana", 40);
persona2.saludar();
