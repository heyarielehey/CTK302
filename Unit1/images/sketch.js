let cheezfries, headphones, sectional ;

function setup() {
  createCanvas(500, 500);
cheezfries = loadImage ("assets/cheezfries.jpeg");
headphones = loadImage ("assets/headphones.jpeg");
sectional = loadImage ("assets/sectional.jpeg");
imageMode(CENTER);
}



function draw() {
background ('pink');
image(cheezfries, width/2, height/2, 100, 100);
image(headphones, width/2, height/2-120, 100, 100);
image(sectional, width/2, height/2+120, 100, 100);

}
