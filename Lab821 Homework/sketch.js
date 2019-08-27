//Sky Gastinel
//August 21st 2019
var b1, b2, b3;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(0,0,0);//black background color
b1 = new Ball(random(width), random(height), random(-5,5), random(-5,5), random(10,40), 40);
b2 = new Ball(random(width), random(height), random(-5,5), random(-5,5), random(10,100), random(10,100));
b3 = new Ball(random(width), random(height), random(-5,5), random(-5,5), random(30,35), random(30,35));
}

function draw() {
  // put drawing code here
  b1.run();
  b2.run();
  b3.run();
}
