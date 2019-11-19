//  Sky Gastinel
// 19 November 2019
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var gamestate = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(188, 235, 190);
  fill(114, 100, 100);
  frameRate(10);
  // loadSnakes(1);
  // loadFood();
  // gameStateButtons();
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
  fill(196, 155, 114);
rect(50, 50, 700, 700);
//box
fill(188, 235, 190);
textSize(50);
textAlign(CENTER);
textStyle(BOLD);
text('~Snake Game~', 400, 300);
//Paddle Game title
fill(237, 102, 92);
rect(200, 500, 400, 100);
//box for buttons
fill(188, 235, 190);
textSize(50);
textAlign(CENTER);
textStyle(BOLD);
text('click to play', 400, 570);
//"play"
fill(237, 102, 92);
textSize(20);
textStyle(BOLD);
text('by: Sky Gastinel', 130, 745);
//by: Sky Gastinel
}

function mouseClicked() {
  loadFood();
  loadSnakes(1);
  gameState = 2
}

// function mouseClicked() {
//   for(var i = 0; i<buttons.length; i++) {
//   buttons[i].mouseClicked();
//   }
// }

function playGame() {
  if(mouseX >0 &&
  mmouseX< 800 &&
  mouseY>  0&&
  mouseY< 800) {
    playSetup();
  }
}

// endGame() {
// }

//loading snakes and food
function loadSnakes(n) {
    snake = new Snake (20, 20, 20, 20, 1);
}

function  loadFood(n) {
    food = new Food (Math.floor(random(0, 39)), Math.floor(random(0, 39)), 20, 20)
}

// function gameStateButtons() {
//     buttons = [];
//   var playButtoncallback = function() {
//     gameState = 2;
//     playSetup();
//   }
//   var playButton = new Button(200, 500, 400, 100, 'click to play', color(188, 235, 190), playButtoncallback);
//     buttons.push(playButton);
//   }

function playSetup() {
  loadSnakes(1);
  loadFood();
gameState = 2;
}

//moves the snake code
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
