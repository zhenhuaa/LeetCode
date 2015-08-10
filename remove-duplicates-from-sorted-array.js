/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) return nums;
  var ix = 1;
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] != nums[i-1]) {
      nums[ix++] = nums[i];
    }
  }
  return ix;
};
