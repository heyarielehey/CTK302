let f1, f2 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont('assets/Cabron.ttf') ;
  f2 = loadFont('assets/goodtimes.ttf') ;
}

function draw() {
background ("yellow")
textFont(f1);
textSize(48);
text("hello world" , width/2, 100) ;

textFont(f2);
textSize(24);
text("goodbye universe", width/2, 160);
}
