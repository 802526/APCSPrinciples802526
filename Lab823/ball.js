// Aug 21

//github test
class Ball{
  constructor(x,y,dx,dy,sizeX,sizeY){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255));
    this.sizeX = sizeX;
    this.sizeY = sizeY;

  }
  run(){
  this.checkEdges();
  // this.sizecontrol();
  this.update();
  this.render();
}
  checkEdges(){
    if(this.loc.x<this.sizeX/2){
      this.vel.x=-1*this.vel.x;
    }//left side of screen
    if(this.loc.x>width-this.sizeX/2){
      this.vel.x = -1*this.vel.x;
    }//right side of screen
    if(this.loc.y<this.sizeY/2){
      this.vel.y=-1*this.vel.y;
    }//top of the screen
    if(this.loc.y>height-this.sizeY/2){
      this.vel.y=-this.vel.y;
    }
  }
  // sizecontrol(){
  //   if(this.sizeX>300){
  //     this.sizeX=this.sizeX-250
  //   }
  // }
  update(){
      this.loc.x=this.loc.x+this.vel.x;
      this.loc.y=this.loc.y+this.vel.dy;
      // this.sizeX=this.sizeX+1
    }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.sizeX, this.sizeY)
  }
}//end ball class
