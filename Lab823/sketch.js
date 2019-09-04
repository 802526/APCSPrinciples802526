//Sky Gastinel
//August 21st 2019
var balls = []
var mainBall
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
loadBalls(10);
}

function draw() {
  background(0, 0, 0, 100)
  // put drawing code here
  // b1.run();
  // b2.run();
  // b3.run();
  runBalls();
  mainBall.run();
}
function loadBalls(n){
  fill(84, 46, 255)
  mainBall = new Ball (width/2, height/2, 0, 0, 80, 80)
  for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(height), random (-8,8), random(-8,8), random(10,20), random(10,20))
//this is the ball constructor from before
//function loadballs is called once at the beginning
//the for loop basically creates each ball. starts at 0, changes by 1 up until 9 aka the n value.
  }
}
function runBalls(){
  for(var i =0; i<balls.length; i++){
    balls[i].run();
  }
}
