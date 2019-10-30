//  Sky Gastinel
// 	28 October 2019
//  This is a comment
//  The setup function function is called once when your program begins
var bars = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBars(20);
}

//  The draw function is called @ 30 fps
function draw() {
  runBars();
}

// function drawList(listBars) {
//   for (var i = 0; i < listBars.length; i++) {
//     listBars[i].run();
//   }
// }

function runBars() {
  for(var i = 0; i<bars.length; i++) {
    bars[i].set(i);
  }
  background(5, 5, 5);
  for(var i = 0; i<bars.length; i++) {
    bars[i].run();
  }
}

function loadBars(n) {
  fill(122, 37, 219);
  for (var i = 0; i<n; i++){
    bars[i] = new Bar(i*width/n, 800, width/n, random(10, 800));
  }
}
