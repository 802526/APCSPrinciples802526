//  Sky Gastinel
// 30 September 2019
// This is a comment
//The setup function function is called once when your program begins

var balls = []
var buttons = []
var paddle;
var gameState = 1;
var difficulty;
var health;
var score;
//art
let w, h, num;
let url = "https://coolors.co/app/1a535c-4ecdc4-f7fff7-ff6b6b-ffe66d";
let pallete;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(209, 209, 209);

  //art
    angleMode(DEGREES);
      w = width * 5;
      h = height * 5;
      num = 40;
      pallete = createPallete(url);

  gameState1Buttons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(209, 209, 209, 50);

  //art
      background(0, 0, 0, 10);
       push();
       translate(width / 2, height / 2);
       for (let i = 0; i < num; i++) {
         let f = frameCount / 100;
         let n = map(i, 0, num, 0, pallete.length);
         let current = int(n + f) % pallete.length;
         let next = ceil(n + f) % pallete.length;
         let fl = (f+ n) % 1;
         let c1 = color(pallete[current]);
         let c2 = color(pallete[next]);
         colorMode(RGB);
         let c = lerpColor(c1, c2, fl);
         let x = cos(frameCount * 2.5 + i * 8) * w / 15;
         let y = sin(frameCount * 1.5 + i * 10) * w / 15;
         let r = map(i, 0, num, w / 100, w / 2);
         drawRectWithHole(x, y, w, h, r, c);
       }
       pop();


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
    runButtons();
  }

function startGame() {
  fill(90, 125, 242);
  rect(50, 50, 700, 700);
  //blue box
  fill(237, 135, 255);
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  text('~Paddle Game~', 400, 300);
  //Paddle Game title
  rect(200, 500, 400, 100);
  //pink box for buttons
  fill(44, 66, 138);
  textSize(15);
  textStyle(BOLD);
  text('by: Sky Gastinel', 115, 745);
  //by: Sky Gastinel
}

function mouseClicked() {
for(var i = 0; i<buttons.length; i++) {
  buttons[i].mouseClicked();
}
  }

function playGame() {
  runPaddle();
  runBalls();
  fill(0, 0, 0);
  textSize(20);
  textStyle(BOLD);
  text('Health: '+health, 60, 30);
  if(health <= 0) {
    endGameSetup();
  }
  textSize(20);
  textStyle(BOLD);
  text('Score: '+score, 60, 60);
  //score
  if(balls.length<1) {
    loadBalls(12);
  }
}

function endGame() {
  fill(255, 74, 74);
  rect(50, 50, 700, 700);
  //red background
  fill(168, 12, 12);
  textStyle(BOLD);
  textSize(100);
  textAlign(CENTER);
  text('YOU LOSE!', 400, 400);
//you lose text
  textSize(40);
  textAlign(CENTER);
  text('Score: '+score, 400, 500);
}

function  loadBalls(n) {
    balls = [];
    for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(0, 650), random(-4, 4), random(-4,4), 15, 15);
      }
}

function loadPaddle() {
    paddle = new Paddle(random(width), random(height), 150, 15);
  }

function gameState1Buttons() {
  buttons = [];
  var btn1callback = function() {
    difficulty = 'E';
    playSetup();
  }
  var btn2callback = function() {
    difficulty = 'M'
    playSetup();
  }
  var btn3callback = function() {
    difficulty = 'H'
    playSetup();
  }
  var btn4callback = function() {
    gameState = 1.5;
    gameState15Buttons();
  }
  // if(gameState = 1.5) {
  //   var btn5callback = function() {
  //     gameState = 1;
  //   }
  // }
  var btn1 = new Button(210, 510, 80, 80, 'Easy', color(156, 255, 182), btn1callback);
//easy button
  var btn2 = new Button(360, 510, 80, 80, 'Medium', color(244, 250, 137), btn2callback);
  //medium button
  var btn3 = new Button(510, 510, 80, 80, 'Hard', color(255, 89, 120), btn3callback);
  //hard button
  var btn4 = new Button(330, 620, 140, 30, 'Instructions', color(237, 135, 255), btn4callback);
  // instructions button
  buttons.push(btn1);
  buttons.push(btn2);
  buttons.push(btn3);
  buttons.push(btn4);
}

function gameState15Buttons() {
  buttons = [];
  var btn5callback = function() {
    gameState = 1;
    gameState1Buttons();
  }
  var btn5 = new Button(300, 680, 200, 50, 'Return to Home', color(101, 168, 91), btn5callback);
  buttons.push(btn5);
}

function runPaddle() {
  paddle.run();
  }

function runBalls() {
  for(var i =0; i<balls.length; i++){
    balls[i].run();
  }
}

function runButtons() {
  for( var i = 0; i<buttons.length; i++) {
    buttons[i].run();
  }
}

function playSetup() {
  if (difficulty === 'E') {
    health = 10
  }
  if (difficulty === 'M') {
    health = 7
  }
  if (difficulty === 'H') {
    health = 4
  }
  score = 0;
  buttons = [];
  loadBalls(10);
  loadPaddle();
  gameState = 2;
}

function endGameSetup() {
  gameState = 3;
  buttons = [];
  var btn6callback = function() {
    gameState = 1;
    gameState1Buttons();
  }
  var btn6 = new Button(300, 680, 200, 50, 'Return to Home?', color(114, 185, 252), btn6callback);
  buttons.push(btn6);
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
  // fill(18, 184, 153);
  // rect(300, 680, 200, 50);
  // //blue button
  // fill(14, 117, 107);
  // textSize(25);
  // textStyle(BOLD);
  // text('Return to Home', 400, 715);
}

function drawRectWithHole(_x, _y, _w, _h, _r, _c) {
  push();
  translate(_x, _y);
  fill(_c);
  noStroke();
  beginShape();
  vertex(-_w / 2, -_h / 2);
  vertex(_w / 2, -_h / 2);
  vertex(_w / 2, _h / 2);
  vertex(-_w / 2, _h / 2);

  beginContour();
  for (let angle = 0; angle > -360; angle -= 5) {
    let x = cos(angle) * _r / 2;
    let y = sin(angle) * _r / 2;
    vertex(x, y);
  }
  endContour();
  endShape(CLOSE);
  pop();
}

function createPallete(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}
