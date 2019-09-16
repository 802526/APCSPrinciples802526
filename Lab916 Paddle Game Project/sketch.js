//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(10);
  loadPaddle();
}

//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0, 50);
  // attractor.run()
  // repeller.run()
  runPaddle();
  runBalls();
  }
function  loadBalls(n) {
  for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(height), random (-4,4), random(-4,4), random(10,20), random(10,20));
}
}
function loadPaddle() {
    paddle = new Paddle(random(width), random(height), 150, 15)
  }

function runPaddle() {
  paddle.run();
  }

function runBalls() {
  for(var i =0; i<balls.length; i++){
    balls[i].run();
}
}
