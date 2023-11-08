const fetchUserData = (callback) => {
   setTimeout(() => {
      const user = { id: 1, username: "User1" };
      callback(user);
   }, 6000);
};

const callbackFuncion = (user) => {
   console.log("Datos del usuario: ", user);
};

// Pila de ejecucion
console.log("Primera parte del codigo");
fetchUserData(callbackFuncion);
console.log("Otra parte del codigo");
console.log("Otra parte del codigo");
console.log("Otra parte del codigo");
