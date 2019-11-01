class Snake {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = color(100, 100, 100);
  }

run() {
  this.update();
  this.render();
}

update() {
  if
}

render() {
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}
}
