//  Sky Gastinel
// 4 November 2019
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var gamestate = 1;
var button;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(188, 235, 190);
  fill(114, 100, 100);
  frameRate(10);
  loadSnakes(1);
  loadFood();
}

//  The draw function is called @ 30 fps
function draw() {
  background(190, 235, 190);
  if(gamestate === 1) {
    startGame()
  }else if (gameState === 2) {
    playGame();
  }else if (gameState === 3) {
    endGame();
  }
}

function startGame() {
  fill(90, 125, 242);
rect(50, 50, 700, 700);
//blue box
fill(237, 135, 255);
textSize(50);
textAlign(CENTER);
textStyle(BOLD);
text('~Snake Game~', 400, 300);
//Paddle Game title
rect(200, 500, 400, 100);
//pink box for buttons
fill(90, 125, 242);
textSize(50);
textAlign(CENTER);
textStyle(BOLD);
text('click to play', 400, 570);
//"play"
fill(44, 66, 138);
textSize(15);
textStyle(BOLD);
text('by: Sky Gastinel', 115, 745);
//by: Sky Gastinel
mouseClicked();
}

function mouseClicked() {
  if(mouseX >200 &&
  mouseX<600 &&
  mouseY> 500 &&
  mouseY< 600) {
    gameState = 2;
  }
}

function playGame() {
  snake.run();
  food.run();
}
//
// endGame() {
//
// }

function loadSnakes(n) {
    snake = new Snake (20, 20, 20, 20, 1);
}

function  loadFood(n) {
    food = new Food (Math.floor(random(0, 39)), Math.floor(random(0, 39)), 20, 20)
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.vel = createVector(0,-1);
  }
  if(keyCode === DOWN_ARROW) {
    snake.vel = createVector(0,1);
  }
  if(keyCode === LEFT_ARROW) {
    snake.vel = createVector(-1,0);
  }
  if(keyCode === RIGHT_ARROW) {
      snake.vel = createVector(1, 0);
  }
}
