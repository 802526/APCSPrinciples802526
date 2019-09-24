//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var gameState = 1;
var difficulty = 'E';
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
    if (gameState === 1) {
      startGame();
    }else if (gameState === 2) {
      playGame();
    }else if (gameState === 3) {
      endGame();
    }
    if (gameState === 1.5) {
      instructions();
    }
  }

function startGame() {

  fill(90, 125, 242);
  rect(50, 50, 700, 700);
  //blue box
  fill(237, 135, 255)
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  text('~Paddle Game~', 400, 300);
  //Paddle Game title
  rect(200, 500, 400, 100);
  fill(156, 255, 182);
  rect(210, 510, 80, 80);
  //green easy button
  fill(66, 125, 81);
  textSize(20);
  textStyle(BOLD);
  text('EASY', 250, 560);
  //easy words
  fill(255, 89, 120);
  rect(510, 510, 80, 80);
  //red hard button
  fill(179, 27, 62)
  textSize(20);
  textStyle(BOLD);
  text('HARD', 550, 560);
  //hard text
  fill(244, 250, 137);
  rect(360, 510, 80, 80);
  //medium yellow button
  fill(212, 191, 32);
  textSize(20);
  textStyle(BOLD);
  text('MEDIUM', 400, 560);
  //medium text
  fill(44, 66, 138);
  textSize(15);
  textStyle(BOLD)
  text('by: Sky Gastinel', 115, 745);
  //by: sky Gastinel
  fill(237, 135, 255);
  rect(350, 620, 100, 20);
  //instructions button
  fill(184, 61, 161);
  textSize(15);
  textStyle(BOLD);
  text('instructions', 400, 635)
}

function mouseClicked() {
  // use mouseX and mouseY and gamestate to determine if we clicked on a button.
  if (gameState = 1) {
    if(mouseX>210 &&
      mouseX<290 &&
      mouseY>510 &&
      mouseY<590) {
        difficulty = 'E';
        gameState = 2
      }
    //codes for easy button
    if(mouseX>360 &&
      mouseX<440 &&
      mouseY>510 &&
      mouseY<590) {
        difficulty = 'M';
        gameState = 2
      }
    //codes for medium button
    if(mouseX>510 &&
      mouseX< 590 &&
      mouseY> 510 &&
      mouseY< 590) {
        difficulty = 'H'
        gameState = 2
      }

  //codes for the hard button/level
    if (mouseX>350 &&
        mouseX<450 &&
        mouseY>620 &&
        mouseY<640) {
          gameState = 1.5
        }
    //codes for the hard button
      if (mouseX>300 &&
          mouseX<500 &&
          mouseY>680 &&
          mouseY<730) {
            gameState = 1
          }
  }
}

function playGame() {
  runPaddle();
  runBalls();
}

function endGame() {
  fill(255, 74, 74);
  rect(50, 50, 700, 700);
  fill(168, 12, 12);
  textStyle(BOLD);
  textAlign(CENTER);
  text('YOU LOSE!', 50, 50)
  fill(54, 54, 247);
  rect(100, 500, 600, 200);
  //the blue button to play again
  fill(168, 12, 12);
  textStyle(BOLD);
  text('Play Again', 125, 510);
}

function  loadBalls(n) {
    for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(0, 650), 4, 4, 15, 15);
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

function instructions() {
  fill(62, 173, 118);
  rect(50, 50, 700, 700);
  //green background
  fill(0, 0, 0);
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Instructions', 400, 180);
  //instructions title
  fill(0, 0, 0);
  textSize(20);
  textStyle(BOLD);
  text('Move the mouse in order to move your paddle. The goal of the game', 400, 400);
  text('is to survive as long as possible. When a ball hits the bottom of the', 400, 425);
  text('paddle, health is lost. When a ball hits the top of the paddle, the ball', 400, 450);
  text('disappears and your score increases. After all the balls disappear,', 400, 475);
  text('another round begins and more balls are added to the screen.', 400, 500);
  text('Good luck', 400, 535);
  //Instructions
  fill(18, 184, 153);
  rect(300, 680, 200, 50);
  //blue button
  fill(14, 117, 107);
  textSize(25);
  textStyle(BOLD);
  text('Return to Home', 400, 715);
}
