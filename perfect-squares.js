/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  dp = {0:0};
  for(var i = 1; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    for(var j = 1; j*j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i-j*j]+1);
    }
  }
  return dp[n];
};
