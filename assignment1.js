/**
 * Approach for solution 1 
 * find the smallest and largest element using Math.min and Math.max function
 * Calculate and return the difference
 **/



function findDiff1(array) {
  var maxValue=0;
  var minValue=0;
  var diff =0;

  maxValue=Math.max(...array);
  minValue=Math.min(...array);
  diff=maxValue-minValue;
  return diff;
}



/**
 * Approach for solution 2 
 * find the maximum and minimum value by iterating over array
 * return the difference
 **/


function findDiff2(array) {
  var minV = Number.MAX_SAFE_INTEGER;  // represents the maximum safe integer
  var maxV = Number.MIN_SAFE_INTEGER;  // represents the minimum safe integer

  for(var i = 0; i <= array.length; i++){
    if (array[i] < minV) {
      minV = array[i];
    }
    if (array[i] > maxV) {
      maxV = array[i];
    }
  }
  return maxV - minV;
}




// inputs
var array = [5,7,11,2,3,-4,10];
var arrayTwo = [3,10,20,8,5,2,10,11,31,13,11,22,4];

// tests
console.log("Test Case 1 for findDiff1",findDiff1(array) === 15);
console.log("Test Case 2 for findDiff1",findDiff1(arrayTwo) === 29);


console.log("Test Case 1 for findDiff2",findDiff2(array) === 15);
console.log("Test Case 2 for findDiff2",findDiff2(arrayTwo) === 29);



/**
 * solution 2 is faster because we are iterating over each element and then finding max and min values, solution 2 runs in linear time i.e. Big-Oh(n) time.
 * solution 1 on other hand seems easy to implement but interal sorting(operation) tends upto increase the running time to Big-Oh of n.log n  
 **/



