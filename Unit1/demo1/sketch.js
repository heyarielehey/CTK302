function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);
  text ("Once upon a time I was...", 100, 100);
text("drabby.", 444, 162);
  textSize (24);

  text("then the sun came out & I became...", 345, 443);
  textSize (16);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
 background(196, 251, 255);
    //and I decided to live my most SUPER colorful best life!

    //long 1
    fill (20, 500, 75);
    rect (75, 565, 100, 500);


    //bottom mid
    fill (29, 255, 254);
    rect (300, 565, 500, 50);

    //top mid rect
    fill (255, 166, 158);
    rect (320, 60, 150, 75);

    //long r
    fill (255, 71, 247);
    rect (500, 100, 150, 500); //long r

    //face
    fill (255, 226, 255);
    ellipse(300, 240, 200, 200);

    line(300, 340, 300, 500);

    //sun
    fill (255, 255, 3);
    ellipse (50, 40, 185) ;

    //dress
    fill (252, 192, 3) ;
    triangle(230, 511, 300, 378, 364, 511);

    line (300, 376, 226, 404);  //l arm
    line (300, 379, 376, 403); //r arm
    //line (302, 502, 250, 400);
    line (314, 514, 320, 564); //r leg
    line (275, 513, 273, 564);  //l leg

    //r eye
    fill (201, 255, 192);
    ellipse (350, 190, 20, 20);


    //l eye
    fill (192, 199, 240);
    ellipse (278, 190, 20, 20);


   //mouth
    fill (255, 47, 37);
    arc(300, 250, 100, 100, 0, radians(180), PIE);

  } else {
    // when the mouse isn't pressed!

    ellipse(300, 240, 200, 200);
   line(300, 340, 300, 500);
    line (300, 380, 250, 400);
    line (300, 380, 359, 400);
    //line (302, 502, 250, 400);
    line (302, 503, 370, 575);
    line (302, 503, 240, 575);
    line(383, 200, 350, 200);
    line(280, 200, 310, 200);
    line(250, 270, 350, 275);
  }



  // this shows mouse location - comment it out when you're done!

  fill(300);
  //text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
