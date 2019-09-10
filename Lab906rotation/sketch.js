//Sky Gastinel
//August 21st 2019
var ships = []
var attractor, repeller;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
loadBalls(10);
}

function draw() {
  background(0, 0, 0, 100);
  // put drawing code here
  // b1.run();
  // b2.run();
  // b3.run();
  runBalls();
  mainBall.run();
}
function loadBalls(n){
  fill(84, 46, 255)
  attractor = new Ball (width/2, height/2, random(-2, 2), random(-2, 2), 80, 80);
  repeller = new Ball (width/2, height/2, random(-2, 2), random(-2, 2), 80, 80);
  for(var i = 0; i<n; i++){
  ships[i] = new Ship (random (width), random(height), random (-4,4), random(-4,4), random(10,20), random(10,20));
//this is the ball constructor from before
//function loadballs is called once at the beginning
//the for loop basically creates each ball. starts at 0, changes by 1 up until 9 aka the n value.
  }
}
function runBalls(){
  for(var i =0; i<balls.length; i++){
    balls[i].run()
  }

}
