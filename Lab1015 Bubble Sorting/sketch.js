//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  var n = [0, 2, 3]
  for (i=0; i<n-1; i++) {
    for (j=0; j<n-1-i; j++)
  /* compare the two neighbors*/
      if (a[j+1] < a[j]) {
  /* swap a[j] and a[j+1]*/
        tmp = a[j];
        a[j] = a[j+1];
        a[j+1] = tmp;
    }
  }

}

//  The draw function is called @ 30 fps
function draw() {

}
