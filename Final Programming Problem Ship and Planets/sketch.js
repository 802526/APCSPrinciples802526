//  Sky Gastinel
// 	16 December 2019
//  This is a comment
//  The setup function function is called once when your program begins

var ships = []
var planets = []
var attractor, repeller, mainBall;

function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
  loadShips(1);
  loadPlanets(4);
}

function draw() {
  background(0, 0, 0, 50);
  // attractor.run()
  // repeller.run()
  runPlanets();
  runShips();
}

function loadShips(n) {
  fill(84, 46, 255)
  for(var i = 0; i<n; i++){
    ships[i] = new Ship(random(width), random(height), random(-5, 5), random(-5, 5), random(0, TWO_PI))
  }
}

function loadPlanets(n) {
  for(var i = 0; i<n; i++) {
    planets[i] = new Ball(random(width), random(height), random(-2, 2), random(-2, 2), 40, 40);
  }
}

function runShips() {
  for (var i = 0; i < ships.length; i++) {
    ships[i].run()
  }
}

function runPlanets() {
  for (var i = 0; i < planets.length; i++) {
    planets[i].run()
  }
}
