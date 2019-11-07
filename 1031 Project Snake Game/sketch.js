//  Sky Gastinel
// 4 November 2019
//  This is a comment
//  The setup function function is called once when your program begins
var snake
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(188, 235, 190);
  fill(114, 100, 100);
  frameRate(10);
  loadSnakes(1);
  loadFood(10);
  //loadFood(j);
}

//  The draw function is called @ 30 fps
function draw() {
  background(190, 235, 190);
    snake.run();
}


function loadSnakes(n) {
    snake = new Snake (20, 20, 20, 20, 5);
}
