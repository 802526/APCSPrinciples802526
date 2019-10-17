//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  var list = [4, 7, 3, 8, 1, 9, 2];
  for(var i = 0; i < list.length; i++) {
    var index = i;
    for(var j = i; j < list.length; j++) {
      if (list[j] < list[index]) {
        index = j;
      }
    }
    // Swap the values in list at index "i" and index "index"
    var temp;
    temp = list[i];
    list[i] = list[index];
    list[index] = temp;
  }

  console.log(list);
}

//  The draw function is called @ 30 fps
function draw() {

}
