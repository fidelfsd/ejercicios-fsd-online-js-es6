const saludo = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve("hola mundo");
      }, 1000);
   });
};

saludo().then((data) => {
   console.log(data);
});
