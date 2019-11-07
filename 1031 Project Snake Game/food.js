class Food {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
  }

  run() {
    this.update();
    this.render();
  }
}
