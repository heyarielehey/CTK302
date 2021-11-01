let cars = [];

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 20; i++) {
  cars.push(new Car());
}

function draw() {
  background('grey') ;
  for (let i = 0; i < 20; i++) {
    cars[i].display();
    cars[i].move();
}


class Car {

  constructor() {
    //attributes
    this.pos = createVector(width / 2, height / 2) ;
    this.vel = createVector(random(-3, 3), random(-3, 3)) ;

  }

  //methods
  display() {
    rect(this.x, 100, 50, 25) ;
  }
}
