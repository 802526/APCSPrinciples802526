//Sky Gastinel
//7 October 2019
var numberRectV = 8
var numberRectH = 8
var a, b, c;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(209, 209, 209);
}

//  The draw function is called @ 30 fps

function draw() {
  for(var r = 1; r <= numberRectH; r++) {
    for(var n = 1; n <= numberRectV; n++) {
      var upratio = (r-1)/(numberRectH-1);
      var acrossratio = (n-1)/(numberRectV-1);
      fill(20, 100, 20);
      rect((n-1)*width/numberRectV, (r-1)*height/numberRectH, width/numberRectV, height/numberRectH);
    }
  }
}
