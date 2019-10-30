//Sky Gastinel
//23 October 2019
class Bar {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = color(114, 138, 173);
  }

  run() {
    this.render();
  }

  render() {
    fill(114, 138, 173)
    rect(this.x, this.y, this.w, this.h);
  }
  set(i) {
    this.x = i*width/n
  }

}//end of Bar class++++++++++++
