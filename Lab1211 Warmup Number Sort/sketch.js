//  Sky Gastinel
// 	11 December 2019
//  This is a comment
//  The setup function function is called once when your program begins
var numbers = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadnumbers(11);
  mySort();
  logNumbers();

}//////////end of setup function

//  The draw function is called @ 30 fps
function draw() {

}

function loadnumbers(n) {
  for (var i = 0; i < n; i++) {
    numbers[i] = random(1, 100)
  }
}

function mySort() {
  var t;
  for (var  i = 1; i < numbers.length; i++) {
        for(var  j = i ; j > 0 ; j--) {
//  Swapping Code
           if(numbers[j] < numbers[j-1]){
              t = numbers[j];
              numbers[j] = numbers[j-1];
              numbers[j-1] = t;
            }
  //  Swapping Code
        }
   }
}

function logNumbers() {
  console.log('array of numbers')
  console.log(numbers)

  findAverage();
  findMedian();
}

function findAverage() {
  var av = 0
  for(var i=0; i < numbers.length; i++) {
    var av = (av + numbers[i])
  }
  av = av/numbers.length
  console.log('average')
  console.log(av)
}

function findMedian() {
  var med = 0;
  var i = (numbers.length/2 + 0.5)
  med = numbers[i]
  console.log('median')
  console.log(med)
}
