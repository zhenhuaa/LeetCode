/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i = 0;
  for(var j = 0; j < n; j++) {
    i = j;
    while(i < m+j && nums1[i] <= nums2[j]) {
      i++;
    }
    for(var k = m+j; k > i; k--) {
      nums1[k] = nums1[k-1];
    }
    nums1[i] = nums2[j];
  }
};
