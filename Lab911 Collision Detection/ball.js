// Aug 21

//github test
class Ball {
  constructor(x,y,dx,dy,sizeX,sizeY){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(random(100, 200), random(100, 200), random(100, 255));
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
  //   if(this.loc.x>paddle.loc.x &&
  //     this.loc.x<paddle.loc.x +w &&
  //     this.loc.y>paddle.loc.y &&
  //     this.loc.y<paddle.loc.y + h){
  //
  //   return true;
  // }else{
  //   return false;
  // }
  }
  // sizecontrol(){
  //   if(this.sizeX>300){
  //     this.sizeX=this.sizeX-250
  //   }
  // }

  update(){
    // this.loc.x=this.loc.x+this.vel.x;
    // this.loc.y=this.loc.y+this.vel.y;
    //this moves the balls
    // this.sizeX=this.sizeX+1
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.sizeX, this.sizeY);
  }

  attraction(){
    var distToMainBall;
    distToMainBall = this.loc.dist(mainBall.loc);
    if(distToMainBall < 200){
      this.acc = p5.Vector.sub(this.loc, mainBall.loc);
      this.acc.normalize();
      this.acc.mult(0.3);
    }
    else if(distToMainBall < 150){
      this.acc = p5.Vector.sub( mainBall.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    else{
      this.acc = createVector(0,0);
    }
  }

}//end ball class
