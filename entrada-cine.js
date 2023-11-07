const movies = [
   {
      title: "Soy Leyenda",
      age: 13,
   },
   {
      title: "Rey León",
      age: 3,
   },
   {
      title: "La Marca del Demonio",
      age: 18,
   },
   {
      title: "A todo Gas",
      age: 8,
   },
];

// Entrada de datos
// -----------------------------------------------------------------------------
let edadUsuario = 33;
let nombreUsuario = "Bob";
// -----------------------------------------------------------------------------

const peliculasPermitidas = (edad) => {
   const peliculas = [];
   //    for (let i = 0; i < movies.length; i++) {
   //       const objetoMovie = movies[i];

   //       if (edad >= objetoMovie.age) {
   //          // puedo verla
   //          peliculas.push(objetoMovie);
   //       }
   //    }

   for (const objetoMovie of movies) {
      if (edad >= objetoMovie.age) {
         // puedo verla
         peliculas.push(objetoMovie);
      }
   }

   return peliculas;
};

const mostrarMisPeliculas = (peliculas, nombre) => {
   console.log(`${nombre}, puedes ver estas peliculas`);
   //    for (let i = 0; i < peliculas.length; i++) {
   //       const peli = peliculas[i];
   //       console.log(`${peli.title}`);
   //    }

   for (const peli of peliculas) {
      console.log(`${peli.title}`);
   }
};

// Llamadas a la función
const misPeliculas = peliculasPermitidas(edadUsuario);
mostrarMisPeliculas(misPeliculas, nombreUsuario);
