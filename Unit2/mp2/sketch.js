let state = 0;
let timer = 0;
let vol;
let mic;
let cheezfries;
let couch1;


function setup() {
  createCanvas(500, 500);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  cheezfries = loadImage("assets/cheezfries.jpeg");
  couch = loadImage("assets/couch1.jpeg");
}




function draw() {


  switch (state) {
    case 0:
      background("#fca503");
      image(cheezfries, 200, 200, 150, 150);
      text("plz click the fries to start", 100, 100);
      break;

    case 1:
      background("black");
      // get the sound input
      vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
      if (vol > .001) {
        state = 2;
      }
      text("listening", 100, 100);
      break;

    case 2:
      background("red");
      timer++ ;
      if (timer > 3*60) ;
      state = 3 ;
      break;

    case 3:
      background("#d6a854");
      line(300, 75, 200, 350);
      image(couch1, 50, 100, 50, 50);
      text("make some noise for the couch!!!...literally, SCREAM!", 100, 100);
      timer++ ;
      if (timer > 5*60) ;
      state = 3 ;
      break;


  }
}

fill(white);
text(mouseX + ", " + mouseY, 40, 40);

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
