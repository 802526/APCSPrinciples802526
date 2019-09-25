//Sky Gastinel
//25 Septmeber 2019
//this is a coment
//  The setup function function is called once when your program begins
class Button {
  constructor(x, y, w, h, msg, clr){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.msg = msg;
    this.clr = clr;
  }

  run(){
    this.checkMouse();
    this.render();
  }

  checkMouse() {
    if(mouseX>this.loc.x &&
        mouseX<this.loc.x + this.w &&
        mouseY>this.loc.y &&
        mouseY<this.loc.y + this.h &&
        this.msg = 'Easy') {
          gameState = 2;
          difficulty = 'E';
        }
    if(mouseX>this.loc.x &&
        mouseX<this.loc.x + this.w &&
        mouseY>this.loc.y &&
        mouseY<this.loc.y + this.h &&
        this.msg = 'Medium') {
          gameState = 2;
          difficulty = 'M';
        }
    if(mouseX>this.loc.x &&
        mouseX<this.loc.x + this.w &&
        mouseY>this.loc.y &&
        mouseY<this.loc.y + this.h &&
        this.msg = 'Hard') {
          gameState = 2;
          difficulty = 'H';
        }
  }

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h, this.msg, this.clr);
  }

}
