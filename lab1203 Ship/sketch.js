//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var ships = []
var attractor, repeller, mainBall;
var ballSize, colorSlider;

function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
  ballSize = createSlider(5, 100, 40);
  ballSize.position(200, 400)
  colorSlider = createSlider(0, 255, 100);
  colorSlider.position(200, 450)
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
  console.log("bs = " + ballSize);
  //var val = test.value();
  fill(84, 46, 255)
  mainBall = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), ballSize.value(), ballSize.value());
  // attractor = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), 80, 80);
  // repeller = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), 80, 80);
  for(var i = 0; i<n; i++){
    ships[i] = new Ship(random(width), random(height), random(-5, 5), random(-5, 5), random(0, TWO_PI))
    // ships[i] = new Ship(random(width), random(height), random (-4,4), random(-4,4), random(10,20), random(10,20));
    //this is the ball constructor from before
    //function loadballs is called once at the beginning
    //the for loop basically creates each ball. starts at 0, changes by 1 up until 9 aka the n value.
  }
}

function runShips() {
  for (var i = 0; i < ships.length; i++) {
    ships[i].run()
  }
}
