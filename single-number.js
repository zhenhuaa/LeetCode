/**
 *  * @param {number[]} A
 *   * @return {number}
 *    */
var singleNumber = function(A) {
  return A.reduce(function (a, b) {return a ^ b});
};
