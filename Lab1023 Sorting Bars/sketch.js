//  Sky Gastinel
// 	28 October 2019
//  This is a comment
//  The setup function function is called once when your program begins
var bars = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars(20);
}

//  The draw function is called @ 30 fps
function draw() {
}

function loadBars(n) {
  fill(random(150, 220), random(150, 220), random(150, 220));
  for (var i = 0; i<n; i++){
    bars[i] = new Bar(i*width/n, 0, width/n, random(10, 800));
  }
}
