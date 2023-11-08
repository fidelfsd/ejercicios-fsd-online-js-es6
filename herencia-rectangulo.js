class Rectangle {
   constructor(height, width) {
      this.name = "Rectangle";
      this.height = height;
      this.width = width;
   }
   sayName() {
      console.log("Hi, I am a ", this.name + ".");
   }
   get area() {
      return this.height * this.width;
   }
   set area(value) {
      this.height = this.width = Math.sqrt(value);
   }
}

class Square extends Rectangle {
   constructor(length) {
      super(length, length);
      //   this.name = "Square";
   }
}

const rectangulo1 = new Rectangle(10, 10);
console.log(rectangulo1.area);
rectangulo1.sayName();

const cuadrado1 = new Square(10);
console.log(cuadrado1.area);
cuadrado1.sayName();
