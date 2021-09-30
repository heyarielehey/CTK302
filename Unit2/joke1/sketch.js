let state = 0;

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
      text("a blueberry.", 250, 250);

      break;
  }

}

function mouseReleased() {
  state++
  if (state > 1) {
    state = 0;
  }
}
