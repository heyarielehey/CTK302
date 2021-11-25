var cars = [];
var frogPos ;
var myState = 0;
var timer = 20 * 60;
var heart;
var gyronoback;
var song;

function setup() {
  stage = loadImage('assets/bgcalm.jpeg');
  song = loadSound('assets/bs-relaxing.mp3');
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 10; i++) {
      cars.push(new Car());
  }
  frogPos = createVector(width/2, height-100);
  guitar = loadImage('assets/gyronoback.png');
  pick = loadImage('assets/heart.png');

  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);

}

function draw() {
  switch (myState) {
    case 0:
    image(stage, 0, 0);
      textSize(24);
      text("Use WASD or the Arrow Keys to strum the guitar!", width/2, height/2);
      text("press any key to begin",width/2)
      break;

    case 1:
      game();
      timer--;
      if (timer <= 0){
        myState = 3; //oof
      }
      break;

    case 2:
      textSize(24);
      image(stage, 0, 0);
      fill('black');
      rect(width/2, height/2, 600, 200);
      fill('white')
      text("Congratulations! Carnegie Hall Awaits :)",width/2, height/2)
      text("press any key to play again", width/2, 400)
      break;

    case 3:
      textSize(24);
      image(stage, 0, 0);
      fill('black');
      rect(width/2, height/2, 600, 200);
      fill('white')
      text("oof, you were unable to finish your song", width/2, height/2);
      text("press any key to try again", width/2, 400);

      break;

  }

}

function keyPressed(){
  if (song.isPlaying()) {

  } else {
    song.play();
    background(0, 255, 0);
  }
  switch (myState) {
    case 0:
    myState = 1 ;
    break;
    case 2:
    location.reload();
    break;
    case 3:
    location.reload();
    break;

  }
}


function game(){
  background('red');
    image(stage, 0, 0);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

  if  (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1) ;
    }
    //if no cars you winnnn
  if (cars.length == 0) {
    myState = 2;
    }

  }
  //frog
  fill('white');
  image(guitar, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();

}




function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)||keyIsDown(keyCode = 65)) frogPos.x -=8;
  if (keyIsDown(RIGHT_ARROW)||keyIsDown(keyCode = 68)) frogPos.x +=8;
  if (keyIsDown(UP_ARROW)||keyIsDown(keyCode = 87)) frogPos.y -=8;
  if (keyIsDown(DOWN_ARROW)||keyIsDown(keyCode = 83)) frogPos.y +=8;
}

//car class
function Car() {
// attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-6,6), random(-6,6));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


// methods
this.display = function() {
  image(pick, this.pos.x, this.pos.y, 50, 50)
}
this.drive = function(){
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
  }

}
