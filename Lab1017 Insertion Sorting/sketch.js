
//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var arr = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

loadarray(100);
  var temp;
      for (var  i = 1; i < arr.length; i++) {
            for(var  j = i ; j > 0 ; j--) {
//  Swapping Code
               if(arr[j] < arr[j-1]){
                  temp = arr[j];
                  arr[j] = arr[j-1];
                  arr[j-1] = temp;
                }
      //  Swapping Code
            }
       }
  console.log(arr)
}

//  The draw function is called @ 30 fps
function draw() {

}

function loadarray(n) {
  for(var i = 0; i<n; i++) {
    arr[i] = random(0, 1000)
  }
}
