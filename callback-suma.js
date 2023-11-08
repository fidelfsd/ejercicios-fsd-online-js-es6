const multiplicarPorDos = (numero, callback) => {
   const resultado = numero * 2;
   callback(resultado);
};

const callbackFuncion = (resultado) => {
   console.log(`El resultado es: ${resultado}`);
};

multiplicarPorDos(6, callbackFuncion);
