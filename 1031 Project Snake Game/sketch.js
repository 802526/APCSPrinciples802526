//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
snake = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  for(var i = 0; i<1; i++) {
    snake[i] = new Snake (400, 400, 15, 15);
  }
}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i<1; i++) {
    snake[i].run();
  }
}
