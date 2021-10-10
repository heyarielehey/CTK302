let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
    background('#cb92e0');
    text("I think I may have to sue Spotify.", 250, 250)
    break;

    case 1:
      background("#95ebf5");
      text("...for not including him in the hottest singles of the week list.", 100, 100);

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
