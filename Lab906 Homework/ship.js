// September 6th 2019
class Ship{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(50,150), random(50,150), random(50, 200));
  }
  run(){
    this.checkEdges();
    this.update
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++end of ship class
