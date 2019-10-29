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
  // Run one iteration of sorting algorithm
  // Call drawList on the result.
  drawList(bars);
}


// Function that initializes a list/array of random numbers
// (within the range of 10, 800)
// n = list size
// Return new list with n random values
// function initList(n) {
//
// }

// Function that draws a parameter list of numbers
// as a set of bars on the screen.

// listBars = array of bar heights (numbers)
// Draw listBars.length bars on the canvas, with heights listBars
function drawList(listBars) {
  for (var i = 0; i < listBars.length; i++) {
    listBars[i].run();
  }
}

// When sorting, on each iteration, call drawList(list)


function loadBars(n) {
  fill(122, 37, 219);
  for (var i = 0; i<n; i++){
    bars[i] = new Bar(i*width/n, 800, width/n, random(10, 800));
  }
}
