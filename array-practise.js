/**
 * How would you write a function to find the maximum
 * and minimum numbers in an array without using the
 *  built-in Math.max() and Math.min() methods?
 */

const numbers = [1, 4, 68, 23, 34, 7, 124]; //max=68,min=1
function getMaxMin(arg) {
  var max = 0;
  var min = arg[0];
  //write your condition to return max and min in ur collection
  for (let num of numbers) {
    if (min > num) {
      min = num;
    } else if (max < num) {
      max = num;
    }
    console.log(max, min);
  }
  return [max, min];
}

console.log(getMaxMin(numbers));
/**
 * find duplicated in both collection
 */
const col1 = [1, 2, 4, 6, 8];
const col2 = [2, 4, 7, 0];
//2,4

function getDuplicate(arg, arg2) {
  const result = [];
  //write condition here
  return result;
}
