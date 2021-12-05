var bubbles = [];
let url = "";

function setup() {
  let key = "1frakeLSY6VjhEDHbhwwsIDowuxB676VbZsQc_LwXoN0";

  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0";
  // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Which word do you like more?"],
        data[i]["What's your potato preference?"],
        data[i]["Favorite Season(ing)?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("#535E8D");
  //image x and y location
  //background

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(word, potato, seasoning) {
    // only the order of these parameters matters!
    this.word = word;
    this.potato = potato;
    this.seasoning = seasoning;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("#C8FFBE");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.word + "\n" + this.potato + "\n" + this.seasoning,
      this.pos.x,
      this.pos.y
    );

  this.pos.add(this.vel) ;
     if (this.pos.x > width) this.pos.x = 0 ;
  }
}
