//  Sky Gastinel
// 	12 December 2019
//  This is a comment
//  The setup function function is called once when your program begins

var ships = []
var attractor, repeller, mainBall;
var attractionSlider, maxSpeedSlider;

function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
  attractionSlider = createSlider(0.01, 1, 0.5);
  attractionSlider.position(200, 400);
  maxSpeedSlider = createSlider(1, 15, 5);
  maxSpeedSlider.position(200,450);
  loadShips(1);
}

function draw() {
  background(0, 0, 0, 50);
  // attractor.run()
  // repeller.run()
  mainBall.run();
  runShips();
}

function loadShips(n) {
  fill(84, 46, 255)
  mainBall = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), 40, 40);
  for(var i = 0; i<n; i++){
    ships[i] = new Ship(random(width), random(height), random(-5, 5), random(-5, 5), random(0, TWO_PI))
  }
}

function runShips() {
  for (var i = 0; i < ships.length; i++) {
    ships[i].run()
  }
}
