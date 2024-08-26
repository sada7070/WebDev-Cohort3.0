/*  
    Classes are like cookie cutter. once they are created(here constructed) you use it to create that shape(specific work) without creating 
    the cutter everytime we need it.
    Classes can also have methods which can be called by the objects[eg rect.area();].
    Here whenever 'new' keyword comes before the classs name, it trigers the that class's constructor and creates new object.
    Once the new object created, for that particular object various attributes will be assigned using 'this' key word. Here this represents
    that particular object(eg: this.width = width;) which means rect.width = width. Since multiple objects can be created 'this' key word is used.*/

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}.`); // in this syntax we used "back quote" or "backtick" punctuation mark.
    // or
    //console.log("Painting with color " + this.color + ".");
  }
}

const rect = new Rectangle(2, 4, "Red");
console.log(rect.area());
rect.paint();
