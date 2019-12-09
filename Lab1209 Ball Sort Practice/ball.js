class Ball {
  constructor(x, y, clr){
    this.x = x;
    this.y = y
    this.clr = clr
  }

run(){
  this.render();

}

render() {
  fill(this.clr);
  ellipse(this.x, this.y, 20);
}

}
