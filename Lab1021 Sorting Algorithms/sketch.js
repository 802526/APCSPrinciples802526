//  Sky Gastinel
// 	21 October 2019
//  This is a comment
//  The setup function function is called once when your program begins
var arr = []
var numInsertionSwap = 0;
var numBubbleSwap = 0;
var numInsertionCompares = 0;
var numBubbleCompares = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

bubbleSort();
insertionSort();
selectionSort();
}//end of setup function++++++++++

function bubbleSort() {
  //Bubble sorting Code
    loadarray(100);
    var t1 = millis();
         for (var i = arr.length; i>=0; i--) {
           for(var j = 1; j<=i; j++) {
             numBubbleCompares = numBubbleCompares + 1;
             if(arr[j-1]>arr[j]) {
      // Swapping Code ++++++++++++++
                 var temp = arr[j-1];
                 arr[j-1] = arr[j];
                 arr[j] = temp;
                 numBubbleSwap = numBubbleSwap + 1;
              }
      // Swapping Code ++++++++++++++
           }
         }
         var t2 = millis()
         // console.log('Sorted Bubble array')
         // console.log(arr)
         console.log('Number of Bubble Swaps');
         console.log(numBubbleSwap);
         console.log('Number of Bubble Compares');
         console.log(numBubbleCompares);
         console.log('Elapsed Time =' + (t2 - t1)/1000);
      //end of Bubble sorting code+++++++++++
}

function insertionSort() {
  //Insertion Sorting
    loadarray(100);
      var iT1 = millis();
      var temp;
          for (var  i = 1; i < arr.length; i++) {
                numInsertionCompares = numInsertionCompares + 1
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
      var iT2 = millis();
      // console.log('Sorted Insertion array');
      // console.log(arr);
      console.log('Number of Insertion Swaps');
      console.log(numInsertionSwap);
      console.log('Number of Insertion Compares');
      console.log(numInsertionCompares);
      console.log('Insertion Sorting Elapsed Time' + (iT2 - iT1)/1000)
  //end of insertion sorting code++++++++++++++++

}

function selectionSort() {
  loadarray(100);
  for (var i = 0; i < arr.length - 1; i++){
   var index = i;
   for (var j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[index]){
         index = j;
      }
    }
      //  Swapping Code+++++++++++++++++++
      var smallerNumber = arr[index];
      arr[index] = arr[i];
      arr[i] = smallerNumber;
	//  Swapping Code+++++++++++++++++++
  }

  console.log('Number of Insertion Swaps')
}

//insertion sort array function
function loadarray(n) {
  for(var i = 0; i<n; i++) {
    arr[i] = random(100)
  }
}
//end of insertion sort array function+++++++++++++++++++
