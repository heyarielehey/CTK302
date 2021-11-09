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
    this.pos = createVector(100, 100) ;
    this.vel = createVector(random(10), random(10)) ;
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.a = random(200, 255) ;
    this.s = random(5, 20) ;

  }

  //methods
  display() {
    rect(this.x, 100, 50, 25) ;
  }
}
