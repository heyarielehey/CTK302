let bg;
let cars = [];
let net;
let netImage;
let netPos;
let frogPos;
let maxCars = 2;
let timer = 0;
let state = 0;
let carsEaten = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  bg = loadImage("assets/watercolorcalm.jpeg");
  net = loadImage("assets/peacesign.png");

  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: // welcome
    image(bg, 500, 500);
      textSize(28);
      fill("black");
      text("welcome", 100, 100);
      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win state
      background("green");
      textSize(28);
      fill("black");
      text("YOU WON!", 100, 100);
      break;

    case 3: // lose state
      background("blue");
      textSize(28);
      fill("white");
      text("YOU LOST!", 100, 100);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won
      resetTheGame();
      state = 0;
      break;

    case 3: // they lost
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background("yellow");
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      carsEaten++;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  fill("black");
  textSize(14);
  text("cars left = " + cars.length + " cars eaten = " + carsEaten, 20, 30);
  // frog
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  cars = [];
  carsEaten = 0;

  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(200, 200);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    text("CALM", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
