//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;//declraration
function setup() {
  x=300;
  y=400;
  speedX = random(-3, 3)
  speedY = random(-2, 2)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  x= x + speedX
  y = y + speedY
fill (250, 0, 50);
ellipse (x, y, 250, 250);

}
