let state = 0;
let timer = 0;
//let x = 0;
let vel = 0;



function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  //noStroke();
}

function draw() {
  background(100);
  fill("pink")
  rect(width / 2, height / 2, 200, 600);


  switch (state) {
    case 0: //red
      fill('red');
      ellipse(width / 2, height / 2 - 180, 150, 150);
      fill('black');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 180, 150, 150);
      vel = 0 ;
      break;

    case 1: //green
      fill('black');
      ellipse(width / 2, height / 2 - 180, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 180, 150, 150);
      vel = 10 ;
      break;

    case 2: //yellow
      fill('black');
      ellipse(width / 2, height / 2 - 180, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('black');
      ellipse(width / 2, height / 2 + 180, 150, 150);
      vel = 5 ;
      break;
  }
  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) {
      state = 0;
    }

  }

  fill('purple');
  rect(x, height - 100, 100, 50);
  x = x + vel ;
  //x = x + 10 ;
  if (x > width) {
    x = 0;
  }

}
