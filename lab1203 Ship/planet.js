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
    for(var i = 0; i<ships.length; i++){
      var distance = this.loc.dist(ships[i].loc)
      if(distance <= 60)
      {
          this.loc.x = random(width)
          this.loc.y = random(height)
        }
    }
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


}//end ball class
