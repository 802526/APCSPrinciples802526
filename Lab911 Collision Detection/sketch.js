//Sky Gastinel
//August 21st 2019
var ships = []
var attractor, repeller, mainBall, paddle;

function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
  loadShips(20);
  loadPaddle(1);
}

function draw() {
  background(0, 0, 0, 50);
  // attractor.run()
  // repeller.run()
  mainBall.run();
  runShips();
  runPaddle();
}

function loadShips(n) {
  mainBall = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), 40, 40);
  // attractor = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), 80, 80);
  // repeller = new Ball(width/2, height/2, random(-2, 2), random(-2, 2), 80, 80);
  for(var i = 0; i<n; i++){
    ships[i] = new Ship(random(width), random(height), random(-5, 5), random(-5, 5), random(0, TWO_PI))
    // ships[i] = new Ship(random(width), random(height), random (-4,4), random(-4,4), random(10,20), random(10,20));
    //this is the ball constructor from before
    //function loadballs is called once at the beginning
    //the for loop basically creates each ball. starts at 0, changes by 1 up until 9 aka the n value.
  }
function loadPaddle(n) {
    for(var i = 0; i<n; i++){
    paddle = new Paddle(random(width), random(height), 20, 10)
}
}

function runShips() {
  for (var i = 0; i < ships.length; i++) {
    ships[i].run()
  }
}
function runPaddle() {
  for(var i = 0; i < paddle.length; i++){
    paddle[i].run()
  }
}
