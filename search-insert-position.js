/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(A, target) {
  var insertIndex = 0;
  for(var i = 0; i < A.length; i++) {
    if(target > A[i]) {
      insertIndex = i + 1;
    }
  }
  return insertIndex;
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
