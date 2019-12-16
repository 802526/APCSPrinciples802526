class Ship{
  constructor(x1, y1, dx, dy, angle){
    this.loc = createVector(x1,y1);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(112, 31, 219);
    this.angle = angle
  }

  run(){
    this.checkEdges();
    this.gravity();
    this.update();
    this.render();
  }

  checkEdges(){
    if (this.loc.x > width) {
      this.loc.x = 0
    }
    if (this.loc.x < 0) {
      this.loc.x = width
    }
    if (this.loc.y > height) {
      this.loc.y = 0
    }
    if (this.loc.y < 0) {
      this.loc.y = height
    }
  }

  gravity() {
    var direct = createVector(0, 0)
    var direction1 = createVector(planets[0].loc.x - this.loc.x, planets[0].loc.y - this.loc.y);
    var direction2 = createVector(planets[1].loc.x - this.loc.x, planets[1].loc.y - this.loc.y);
    var direction3 = createVector(planets[2].loc.x - this.loc.x, planets[2].loc.y - this.loc.y);
    var direction4 = createVector(planets[3].loc.x - this.loc.x, planets[3].loc.y - this.loc.y);
    //if statement tries to check which planet is closest to it
    if(direction1 < direction2 &&
      direction1 < direction3 &&
      direction1 < direction4){
       direct = direction1
      }else if(direction2 < direction1 &&
        direction1 < direction3 &&
        direction1 < direction4){
       direct = direction2
      }else if(direction3 < direction1 &&
        direction1 < direction2 &&
        direction1 < direction4){
        direct = direction3
      }else if(direction4 < direction1 &&
        direction1 < direction3 &&
        direction1 < direction2){
        direct = direction3
      }
    direct.normalize();
    direct.mult(0.5);
    this.acc = direct
  }

  update(){
    //speed limit
    if(this.vel.mag() > 5) {
      this.vel.normalize();
      this.vel.mult(5)
    }
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.angle = this.vel.heading() - PI/2;
  }

  render(){
    // // Change CTM by adding to matrix stack
    // push()
    // // do some transformation stuff
    // translate(this.loc)
    // rotate(this.angle)
    // // Draw a triangle at the new origin
    // fill(this.clr);
    // triangle(-8, 0, 8, 0, 0, 15)
    // // Reset the CTM and remove from the matrix stack
    // pop()
    //
    push()//  Save coordinates
       // move the origin to the center
       // of the triangle
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    fill(this.clr)
    triangle(-8, 0, 8, 0, 0, 15);
    pop();// restore the origin to the
         // upper left
  }


}//+++++++++++++++++++++++++++++++++++++++++++++++++++++end of ship class
