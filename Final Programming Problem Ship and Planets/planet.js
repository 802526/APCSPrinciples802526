class Ball {
  constructor(x,y,dx,dy,sizeX,sizeY){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(163, 15, 82);
    this.sizeX = sizeX;
    this.sizeY = sizeY;

  }

  run(){
    this.checkEdges();
    //this.update();
    this.render();
  }

  checkEdges(){
    //checks if the planet is touching the side of the screen, not applicable since it isn't moving anymore
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
    //this codes for whether the ship is touching the planet or not
    for(var i = 0; i<ships.length; i++){
      var distance = this.loc.dist(ships[i].loc)
      if(distance <= 100)
      {
          this.loc.x = random(width)
          this.loc.y = random(height)
        }
    }
    // //if the planets are overlapping, move it (code not working)
    // for(var i = 0; i<planets.length; i++){
    // if(this.loc.x=planets[i].loc.x &&
    //   this.loc.y = planets[i].loc.y) {
    //     this.loc.x = random(width)
    //     this.loc.y = random(height)
    //   }
    // }
  }


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
