//Sky Gastinel
// Aug 21
//github test
class Ball {
  constructor(x,y,dx,dy,sizeX,sizeY){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(164, 252), random(164, 252), random(164, 252));
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  run(){
    this.checkEdges();
    this.isColliding();
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
      this.vel.y=-1*this.vel.y;
    }
}
  isColliding() {
    if (this.loc.x > paddle.loc.x &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y > paddle.loc.y &&
        this.loc.y < paddle.loc.y + paddle.h) {
      this.vel.y = -1*this.vel.y
      //If ball hits the top, ball disappears
      if (this.vel.y <= 0) {
        for(var i = 0; i<balls.length; i++) {
          if(this === balls[i]) {
            balls.splice(i, 1);
          }
        }
      }
      //if ball hits the bottom, more balls added
      else{
        for(var b = 0; b<3; b++) {
          balls.push(new Ball(random (width), random(0, 650), 4, 4, 15, 15));
          health--
        }
      }
    }
  }

  update() {
    if(difficulty === 'E') {
      this.sizeX=20
      this.sizeY=20
      this.acc.y = 0.05
      this.vel.add(this.acc);
      this.loc.add(this.vel);
    }
    if(difficulty === 'M') {
      this.sizeX=15
      this.sizeY=15
      this.acc.y = 0.1
      this.vel.add(this.acc);
      this.loc.add(this.vel);
    }
    if(difficulty === 'H') {
      this.sizeX=12
      this.sizeY=12
      this.acc.y = 0.15
      this.vel.add(this.acc);
      this.loc.add(this.vel);
    }
//different sizes for different levels and velocities

  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.sizeX, this.sizeY);
  }

}//end ball class
