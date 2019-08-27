//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
var speedX, speedY;
var a, b;
var speedA, speedB
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  speedX = random(-5, 5);
  x=200
  speedY= random(-5,5)
  y=200
  speedA = random(-4.0, 4.0)
  a = 100
  speedB = random(-4.0, 4.0)
  b= 150
}

//  The draw function is called @ 30 fps
function draw() {
  x= x+speedX
  y=y+speedY
  a=a+speedA
  b=b+speedB
  fill(200, 0, 0)
ellipse(x, y, 70, 70)
if(x<30){
  speedX=-1*speedX
}
if(x>760){
  speedX=-1*speedX
}
if(y<760){
  speedY=-1*speedY
}
if(y>30){
  speedY=-1*speedY
}
fill(41, 230, 255);
ellipse(a, b, 50, 50);
}
