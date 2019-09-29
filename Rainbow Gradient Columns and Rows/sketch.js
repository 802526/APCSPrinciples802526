//Sky Gastinel
//28 September 2019
var numberRectV = 15
var numberRectH = 8
var a, b;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(209, 209, 209);

  colorMode(RGB);
  a = color(255, 97, 97);
  //upper left corner
  b = color(96, 94, 235);
  //lower left corner
  c = color(242, 242, 116);
  //top right corner
  d = color(169, 255, 156);
  //bottom right corner

}

//  The draw function is called @ 30 fps
function draw() {
  // for(var n = 1; n <= numberRectV; n++) {
  //   fill(300/(numberRectV-1)*(n-1), 36, 97);
  //   rect((n-1)*width/numberRectV, 0, width/numberRectV, height/numberRectH);
  // }
  for(var r = 1; r <= numberRectH; r++) {
    for(var n = 1; n <= numberRectV; n++) {
      // fill(255*(1.0-((r-1.0)/(numberRectH-1.0))), 0, 255*(r-1)/(numberRectH-1));
      var upratio = (r-1)/(numberRectH-1);
      var acrossratio = (n-1)/(numberRectV-1);
      var leftside = lerpColor(a, b, upratio);
      var rightside = lerpColor(c, d, upratio);
      var bothside = lerpColor(leftside, rightside, acrossratio);
      fill(bothside);
      rect((n-1)*width/numberRectV, (r-1)*height/numberRectH, width/numberRectV, height/numberRectH);
    }
  }
}
