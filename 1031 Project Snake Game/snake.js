class Snake {
  constructor(x, y, w, h, size) {
    this.segments = []
    this.w = w;
    this.h = h;
    this.size = size;
    this.clr = color(58, 133, 82);
    for(var i=0; i<size; i++) {
      this.segment[i] = createVector(x+i, y);
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
  for(var i = 0; i<segments.length; i++){
      rect(20*this.loc.x, 20*this.loc.y, this.w, this.h);
  }
}

keyReleased() {
  if(keyCode === UP_ARROW) {
    this.loc.y = this.loc.y - this.h
  }
  if(keyCode === DOWN_ARROW) {
    this.loc.y = this.loc.y + this.h
  }
  if(keyCode === LEFT_ARROW) {
    this.loc.x = this.loc.x - this.w
  }
  if(keyCode === RIGHT_ARROW) {
    this.loc.x = this.loc.x + this.w
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
