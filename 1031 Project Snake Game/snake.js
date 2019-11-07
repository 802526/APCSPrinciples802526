class Snake {
  constructor(x, y, w, h, size) {
    this.segments = []
    this.vel = createVector(0,0);
    this.w = w;
    this.h = h;
    this.size = size;
    this.clr = color(58, 133, 82);
    for(var i=0; i<size; i++) {
      this.segments[i] = createVector(x+i, y);
    }
  }

  run() {
    this.update();
    this.render();
  }

  update() {
    this.keyReleased();
    //this.checkEdges();
  }

  render() {
    fill(this.clr);
    for(var i = 0; i<this.segments.length; i++){
        rect(20*this.segments[i].x, 20*this.segments[i].y, this.w, this.h);
    }
  }

  keyReleased() {
    if(keyCode === UP_ARROW) {
      this.vel = createVector(0,-1);
    }
    if(keyCode === DOWN_ARROW) {
      this.vel = createVector(0,1);
    }
    if(keyCode === LEFT_ARROW) {
      this.vel = createVector(-1,0);
    }
    if(keyCode === RIGHT_ARROW) {
        this.vel = createVector(1, 0);
    }
  }

  checkEdges() {
    if(this.loc.x > 800 ||
       this.loc.x< 0 ||
       this.loc.y> 800 ||
       this.loc.y< 0) {

    }
  }
}
