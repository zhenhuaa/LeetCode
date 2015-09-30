/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxEndHere = nums[0];
  var maxSoFar = nums[0];
  for(var i = 1; i < nums.length; i++) {
    maxEndHere = Math.max(maxEndHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndHere);
  }
  return maxSoFar;
};
