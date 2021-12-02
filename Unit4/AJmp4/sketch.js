function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(displayWidth, displayHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);

  places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02, reggieImg)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES

  places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50980921328644, -88.99149564020013, "Schroeder Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  places.push(new Place(40.508730456808415, -88.98572041960726, "University Galleries", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.511676506705506, -88.9938474159579, "Student Services Building", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51039740494815, -88.9996815241351, "Nelson Smith", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.512969573012896, -88.99488587696477, "Hancock Stadium", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.509699669963155, -88.99664232253424, "Turner Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  places.push(new Place(40.50946288329222, -88.98459824742137, "Uptown Circle", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.47137301266825, -88.94350239220492, "Check Location", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

}

function draw() {

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }
}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      places[i].display();
      break; //should break out of the for loop?
      //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
    }
  }

}

function Place(lat, long, desc, radius, reggieImg) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates



  this.display = function() {
    image(reggieImg, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}
