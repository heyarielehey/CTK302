let song1, song2, song3;


function preload() {
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/thrill.mp3");

  song1.play();
  song2.play();
  song2.play();
  song1.pause();
  song2.pause();
  song3.pause();

}


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
      song1.play(); // spawn song 1
      state = 1;
      break;

    case 1: // listen to song 1
      background('red');

      break;

    case 2: // listen to 2
      song2.play();
      state = 3;
      break;

    case 3: //listen to song 2
      background('green');
      break;

    case 4:
      song3.play();
      break;

    case 5:
      background('yellow');
      break;
  }
}


function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();


}
