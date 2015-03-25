/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var cache = [1, 1, 2];
  var numOfTrees = 0;
  var numTreesHelper = function(n) {
    if(!cache[n]) {
      for(var i = 0; i < n; i++) {
        numOfTrees += numTreesHelper(i) * numTreesHelper(n - 1 - i);
      }
      cache[n] = numOfTrees;
    }
    return cache[n];
  };
  return numTreesHelper(n);
};
