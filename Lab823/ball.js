// Aug 21

//github test
class Ball{
  constructor(x,y,dx,dy,sizeX,sizeY){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
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
    if(this.x<this.sizeX/2){
      this.dx=-1*this.dx;
    }//left side of screen
    if(this.x>width-this.sizeX/2){
      this.dx = -1*this.dx;
    }//right side of screen
    if(this.y<this.sizeY/2){
      this.dy=-1*this.dy;
    }//top of the screen
    if(this.y>height-this.sizeY/2){
      this.dy=-this.dy;
    }
  }
  // sizecontrol(){
  //   if(this.sizeX>300){
  //     this.sizeX=this.sizeX-250
  //   }
  // }
  update(){
      this.x=this.x+this.dx;
      this.y=this.y+this.dy;
      // this.sizeX=this.sizeX+1
    }
  render(){
    fill(this.clr);
    ellipse(this.x, this.y, this.sizeX, this.sizeY)
  }
}//end ball class
