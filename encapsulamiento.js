class CuentaBancaria {
   #balance; // propiedad privada

   constructor() {
      this.#balance = 0;
   }

   get balance() {
      return this.#balance;
   }

   set balance(nuevoBalance) {
      if (nuevoBalance >= 0) {
         this.#balance = nuevoBalance;
      } else {
         console.log("El balance no puede ser negativo");
      }
   }

   depositar(cantidad) {
      if (cantidad >= 0) {
         this.#balance += cantidad;
      } else {
         console.log("La cantidad no puede ser negativo");
      }
   }

   retirar(cantidad) {
      // implementar
   }
}

const cuenta = new CuentaBancaria();

console.log(cuenta.balance);

cuenta.balance = -100;

console.log(cuenta.balance);

cuenta.depositar(50);

console.log(cuenta.balance);

cuenta.depositar(1000);

console.log(cuenta.balance);
