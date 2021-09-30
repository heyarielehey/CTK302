let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
    background('#fc0349');
    text("what do you call a sad strawberry?", 250, 250)
    break;

    case 1:
      background("#73c1e6");
      text("a blueberry...the saddest berry ever.", 250, 250);

      break;
  }

timer++ ;
if (timer > 3*60) {
timer = 0 ;
state++ ;
if (state > 1) state = 0 ;

}

}

function mouseReleased() {
  state++
  if (state > 1) {
    state = 0;
  }
}
