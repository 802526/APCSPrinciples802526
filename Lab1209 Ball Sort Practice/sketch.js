//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(20);
}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i < balls.length; i++){
  balls[i].run();
}
}

function loadBalls(n) {
  for(var i = 0; i < n; i++) {
    balls[i] = new Ball (40*i + 20, 400, color(12.75*i, random(0, 100), random(0, 100)));
  }
}
