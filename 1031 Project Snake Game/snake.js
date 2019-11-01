class Snake {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = color(58, 133, 82);
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
  rect(this.loc.x, this.loc.y, this.w, this.h);
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
       gameState = 3
     }
}
}
