const randNum = () => Math.round(Math.random() * 10); // 0 - 10

// creamos la funcion que devuelve una promesa y cuando se resuelve devuelve un numero aleatorio
const numero = () => {
   return new Promise((resolve) => {
      const numeroRandom = randNum();
      setTimeout(() => {
         resolve(numeroRandom);
      }, 2000);
   });
};

// probar la promesa que devuelve el numero aleatorio
// numero().then((data) => console.log(data));
// numero().then((data) => console.log(data));

// creamos una nueva promesa a partir de dos promesas. El resultado se obtendra cuando las DOS se resuelvan
const sumaPromise = Promise.all([numero(), numero()]);

// gestionamos la promesa anterior
sumaPromise.then((data) => {
   // data es el resultado que devuelve la promesa
   console.log(data);
   const suma = data[0] + data[1];
   console.log(suma);
});
