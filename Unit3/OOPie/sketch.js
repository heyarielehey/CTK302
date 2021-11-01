let myCar1 ;

function setup() {
  createCanvas(500, 500);
  myCar1 = new Car() ;
}

function draw() {
  background('grey') ;
  myCar1.display() ;
}


class Car {

  constructor() {
    //attributes
    this.x = 100 ;

  }

  //methods
  display() {
    rect(this.x, 100, 50, 25) ;
  }
}
