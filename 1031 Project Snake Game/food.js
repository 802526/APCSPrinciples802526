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

  update(){
    if() {
      this.loc.x = random(0, 39)
      this.loc.y = random(0, 39)
    }
  }

  render() {
    fill(199, 52, 52);
    rect(20*this.loc.x, 20*this.loc.y, this.w, this.h)
  }
}
