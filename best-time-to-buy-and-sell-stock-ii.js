/**
 *@param {number[]} prices
 *@return {number}
 */
var maxProfit = function(prices) {
  return prices.length < 2 ? 0 :prices.map(function (e, i, arr) {
    return i ? Math.max(0, e - arr[i-1]) : 0;
  }).reduce(function (a, b) {
    return a + b;
  });
};
