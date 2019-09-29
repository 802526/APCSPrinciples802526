//Sky Gastinel
//28 September 2019
var numberRectV = 10
var numberRectH = 5
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  colorMode(HSB, 360, 100, 100);
  fill(209, 209, 209);
}

//  The draw function is called @ 30 fps
function draw() {
  // for(var n = 1; n <= numberRectV; n++) {
  //   fill(300/(numberRectV-1)*(n-1), 36, 97);
  //   rect((n-1)*width/numberRectV, 0, width/numberRectV, height/numberRectH);
  // }
  for(var r = 1; r <= numberRectH; r++) {
    for(var n = 1; n <= numberRectV; n++) {
      fill(300/(numberRectV-1)*(n-1), 36, 97);
      rect((n-1)*width/numberRectV, (r-1)*height/numberRectH, width/numberRectV, height/numberRectH);
    }
  }
}
