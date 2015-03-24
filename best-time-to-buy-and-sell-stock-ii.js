/**
 *@param {number[]} prices
 *@return {number}
 */
var maxProfit = function(prices) {
  if(prices.length === 0) return 0;
  var findMin = true;
  var min = prices[0];
  var max;
  var maxProfitRes = 0;
  var i, e;
  for(i = 0; i < prices.length; i++) {
    e = prices[i];
    if(findMin) {
      if(e < min) {
        min = e;
      } 
      if (e > min) {
        max = e;
        findMin = false;
      }
    } else {
      if( e > max) {
        max = e;
      }
      if( e < max) {
        maxProfitRes += (max - min);
        min = e;
        max = null;
        findMin = true;
      }
    }
    if(max &&  i === prices.length - 1) {
      maxProfitRes += (max - min);
    }
  }
  return maxProfitRes;
};
