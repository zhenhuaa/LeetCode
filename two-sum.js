/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 *
 **/

var twoSum = function(numbers, target) {
  var valueAndIndex = {};
  var i, diff;
  for(i =0; i< numbers.length; i++) {
    e = numbers[i];
    diff = target - e;
    if(valueAndIndex.hasOwnProperty(diff)) {
      return [valueAndIndex[diff] + 1, i+1];
    } else {
      valueAndIndex[e] = i;
    }
  }
};
