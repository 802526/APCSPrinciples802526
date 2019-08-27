//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 50, 50);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill (20, 60, 100);
  ellipse (400, 400, 700, 700);
  fill (20, 120, 200);
  ellipse (400, 400, 600, 600);
  fill(10, 220, 10);
  ellipse(25, 25, 50, 50);
  fill(10, 220, 10);
  ellipse(775, 775, 50, 50);
  fill(10, 220, 10);
  ellipse(775, 23, 50, 50);
  fill(10, 220, 10);
  ellipse (25, 775, 50, 50);
}
