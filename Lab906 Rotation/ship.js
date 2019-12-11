// September 6th 2019
class Ship{
  constructor(x1, y1, dx, dy, angle){
    this.loc = createVector(x1,y1);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(random(100, 200), random(100, 200), random(100, 255));
    this.angle = angle
  }

  run(){
    this.checkEdges();
    // this.sizecontrol();
    this.update();
    this.render();
    // this.attraction();
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

  update(){
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
