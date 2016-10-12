



/**
 * function checkForIntersection - takes two rectangles rect 1 and rect 2
 * returns true if they intersect else false otherwise. 
 **/

function checkForIntersection (rect1, rect2) {
  return(
    checkEdge(rect1.x, rect1.x + rect1.width, rect2.x, rect2.x + rect2.width) &&
    checkEdge(rect1.y, rect1.y + rect1.height, rect2.y, rect2.y + rect2.height))

/**
 * inner function checkEdge - takes 4 values of rectangles rect 1 and rect 2 which are:
 * left1 and left2 are the minimum values for both the line segments for each of the rectangle
 * right 1 and right 2 are the maximum values for both the line segments for each of the rectangle
 **/


function checkEdge(left1, right1, left2, right2) { 
  return (left1 <= right2 && right1 >= left2);
  }

}


var rect1 = { x: 20, y:30, width: 40, height: 11 };
var rect2 = { x: 50, y:22, width: 26, height: 36 };
var rect4 = { x: 10, y:10, width: 30, height: 20 };
var rect5 = { x: 45, y:10, width: 12, height: 4 };

console.log(checkForIntersection(rect1,rect2));
console.log(checkForIntersection(rect4,rect5));