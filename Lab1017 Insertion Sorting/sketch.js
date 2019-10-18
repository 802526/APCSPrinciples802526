//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
var list = [n]
for(var n = 0; n< 101; n++){
  list[n] = random(1, 100)
}
  function insertion_Sort(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    }
    else if (arr[i] > arr[i-1]) {
      //leave current element where it is
      continue;
    }
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}
console.log(insertion_Sort(list));
}

//  The draw function is called @ 30 fps
function draw() {

}
