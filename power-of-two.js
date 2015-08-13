/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return !!Number(n).toString(2).match(/^10*$/);
};
