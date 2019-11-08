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
  for(var i = this.segments.length -1; i>0; i--) {
    this.segments[i].x = this.segments[i-1].x;
    this.segments[i].y = this.segments[i-1].y;
  }
   this.segments[0].add(this.vel)

  }

  render() {
    fill(this.clr);
    for(var i = 0; i<this.segments.length; i++){
        rect(20*this.segments[i].x, 20*this.segments[i].y, this.w, this.h);
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
