// Definir clase Persona
class Persona {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }

   saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
   }
}

class Estudiante extends Persona {
   constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
   }

   estudiar(asignatura) {
      this.asignatura = asignatura;
      console.log(
         `${this.nombre} esta estudiando en el grado ${this.grado}, la asignatura ${this.asignatura}`
      );
   }
}

// Crear la instancia de Estudiante
const estudiante1 = new Estudiante("Mara", 33, "12vo");

// Llamar a los metodos de la instancia de Estudiante
estudiante1.saludar();
estudiante1.estudiar("Javascript");
