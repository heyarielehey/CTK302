let bg;
let cars = [];
let maxCars = 10;
let carsEaten = 0;
let state = -1;
let net;
let netImage;
let netPos;
let bottleImage;
let timer = 0;
let song1, song2;

function preload() {
  song1 = loadSound("assets/adventure.mp3");
  song2 = loadSound("assets/tomorrow.mp3");

//   song1.play();
//   song2.play();
//   song1.pause();
//   song2.pause();
}

function setup() {
  createCanvas(930, 530);
  bg = loadImage("assets/watercolorcalm.jpeg");
  bottle = loadImage("assets/heart.png");
  net = loadImage("assets/peacesign.png");

  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  netPos = createVector(100, 100);
}

function draw() {
  // image(bg, 0, 0);
  // textSize(10);
  // fill("white");

  switch (state) {
    case -1:
      image(bg, 0, 0);
      textSize(25);
      fill("white");
      text("Click to Go to the Welcome Screen!", 100, 100);
//      state = 0;
      break;

    case 0: //welcome
      image(bg, 0, 0);
      textSize(25);
      fill("white");
      text("Welcome! Click the Mouse to Begin! \n Use the Arrow Keys to Move!", 100, 100);
      textSize(10);
      text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik \n Background music is royalty free music from bensound.com", 10, 470);
      break;

    case 1: //game state
      image(bg, 0, 0);
      game();
      fill("white");
      textSize(10);
      text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik \n Background music is royalty free music from bensound.com", 10, 470);
      timer++;
      if (timer > 10 * 200) {
        timer = 0;
        state = 3;
        song1.pause();
        song2.play();
      }
      break;

    case 2: //win state
      image(bg, 0, 0);
      fill("white");
      textSize(10);
      text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik \n Background music is royalty free music from bensound.com", 10, 470);
      textSize(25);
      fill("white");
      text("You Won!!", 100, 100);
      break;

    case 3: //lose state
      image(bg, 0, 0);
      fill("white");
      textSize(10);
      text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik \n Background music is royalty free music from bensound.com", 10, 470);
      textSize(25);
      fill("white");
      text("You Lost! :(", 100, 100);
      song1.pause();
      break;
  }

  fill("white");
  textSize(15);
  text("Bottles Left = " + cars.length + "\nBottles Caught = " + carsEaten, 20, 30);

  //net
  image(net, netPos.x, netPos.y, 50, 50);
  checkForKeys();
}

function mouseReleased() {
  switch (state) {
    case -1:
      song1.play();
      state = 0;
      break;

    case 0:
      state = 1;
      break;

    case 2: //they won
      resetTheGame();
      state = 0;
      break;

    case 3: //they lost
      resetTheGame();
      state = 0;
      break;
  }

}


function game() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(netPos)) < 50) {
      cars.splice(i, 1);
      carsEaten++;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }
}

  function resetTheGame() {
    timer = 0;
    cars = [];
    carsEaten = 0;

    song1.pause();
    song2.pause();
    song1.play();

    // Spawn many objects
    for (let i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
  }

  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) netPos.x = netPos.x - 5;
    if (keyIsDown(RIGHT_ARROW)) netPos.x = netPos.x + 5;
    if (keyIsDown(UP_ARROW)) netPos.y = netPos.y - 5;
    if (keyIsDown(DOWN_ARROW)) netPos.y = netPos.y + 5;
  }

  //car class
  class Car {
    constructor() {
      // attributes
      this.pos = createVector(random(200), random(200));
      this.vel = createVector(random(-6, 6), random(-6, 6));
    }

    // methods
    display() {
      image(heart, this.pos.x, this.pos.y, 25, 25);
    }
    move() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  }
