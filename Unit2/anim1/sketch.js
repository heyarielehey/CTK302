let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("grey");
rect(x, 100, 100, 100);
x = x + 3 ;
if (x > width) {
  x = 0 ;
}
}
