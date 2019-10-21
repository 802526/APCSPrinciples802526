//  Sky Gastinel
// 	21 October 2019
//  This is a comment
//  The setup function function is called once when your program begins
var arr = []
var numInsertionSwap = 0;
var numBubbleSwap = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

//Insertion Sorting
  loadarray(100);

    var temp;
        for (var  i = 1; i < arr.length; i++) {
              for(var  j = i ; j > 0 ; j--) {
  //  Swapping Code
                 if(arr[j] < arr[j-1]){
                    temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                    numInsertionSwap = numInsertionSwap + 1
                  }
        //  Swapping Code
              }
         }
    console.log(arr)
    console.log(numInsertionSwap)
//end of insertion sorting code++++++++++++++++

//Bubble sorting Code
  loadarray(100)
       for (var i = arr.length; i>=0; i--) {
         for(var j = 1; j<=i; j++) {
           if(arr[j-1]>arr[j]) {
    // Swapping Code ++++++++++++++
               var temp = arr[j-1];
               arr[j-1] = arr[j];
               arr[j] = temp;
               numBubbleSwap = numBubbleSwap + 1
            }
    // Swapping Code ++++++++++++++
         }
       }
       console.log(arr)
       console.log(numBubbleSwap)
    //end of Bubble sorting code+++++++++++

}//end of setup function++++++++++

//insertion sort array function
function loadarray(n) {
  for(var i = 0; i<n; i++) {
    arr[i] = random(100)
  }
}
//end of insertion sort array function+++++++++++++++++++
