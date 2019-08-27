//Sky Gastinel
//August 21st 2019
var balls = []
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
loadBalls(10);
}

function draw() {
  // put drawing code here
  // b1.run();
  // b2.run();
  // b3.run();
  runBalls();
}
function loadBalls(n){
  for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(height), random (-8,8), random(-8,8), random(0,50), random(0,100))
  }
}
function runBalls(){
  for(var i =0; i<balls.length; i++){
    balls[i].run();
  }
}
