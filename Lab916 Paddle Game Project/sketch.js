//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var gameState = 1
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(209, 209, 209);
  loadBalls(10);
  loadPaddle();
}

//  The draw function is called @ 30 fps
function draw() {
  background(209, 209, 209, 50);
  // attractor.run()
  // repeller.run()
    if (gameState ===1) {
      startGame();
    }else if (gameState ===2){
      playGame();
    }else if (gameState ===3) {
      endGame();
    }
  }

function startGame() {
  fill(90, 125, 242);
  rect(50, 50, 700, 700);
  fill(237, 135, 255)
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  text('Paddle Game', 400, 200);
  rect(250, 500, 300, 100)

}

function playGame() {
  runPaddle();
  runBalls();
}

function endGame() {

}




function  loadBalls(n) {
  for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(height), random (-4,4), random(-4,4), random(10,20), random(10,20));
}
}
function loadPaddle() {
    paddle = new Paddle(random(width), random(height), 150, 15);
  }

function runPaddle() {
  paddle.run();
  }

function runBalls() {
  for(var i =0; i<balls.length; i++){
    balls[i].run();
}
}
