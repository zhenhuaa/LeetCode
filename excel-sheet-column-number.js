/**
 * @param {string} s
 * @return {number} Return column number
 */
var titleToNumber = function(s) {
  var alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var len = s.length;
  var colNum = 0;
  for(var i = 0; i < len; i++) {
    colNum += Math.pow(26, len-1-i)  * alphabet.indexOf(s[i]);
  }
  return colNum;
};

console.log(titleToNumber('AA'))
console.log(titleToNumber('AB'))
console.log(titleToNumber('Z'))
