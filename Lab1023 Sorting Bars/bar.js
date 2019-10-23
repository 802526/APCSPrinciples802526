//Sky Gastinel
//23 October 2019
class Bar {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = color(114, 138, 173)
  }

run() {
  this.render();
}

render() {
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}

}//end of Bar class++++++++++++
