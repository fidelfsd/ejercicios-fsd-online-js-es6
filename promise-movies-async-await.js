const movies = [
   // {
   //    title: "Soy Leyenda",
   //    age: 13,
   // },
   // {
   //    title: "Rey León",
   //    age: 3,
   // },
   // {
   //    title: "La Marca del Demonio",
   //    age: 18,
   // },
   // {
   //    title: "A todo Gas",
   //    age: 8,
   // },
];

const getMovies = () => {
   return new Promise((resolve, reject) => {
      if (movies.length > 0) {
         setTimeout(() => {
            resolve(movies);
         }, 2000);
      } else {
         reject(new Error("No  movies available"));
      }
   });
};

console.log("Cargando data...");

const moviesFetch = async () => {
   try {
      const myMovies = await getMovies();
      console.log(myMovies);
   } catch (error) {
      console.log(error.message);
   } finally {
      console.log("Datos listos");
   }
};

moviesFetch();

console.log("Otra parte del programa");
