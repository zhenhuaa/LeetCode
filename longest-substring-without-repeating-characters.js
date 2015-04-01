/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var i = 0;
  var j = 0;
  var charIndex = {};
  var max = 0;
  for(i = 0; i < s.length; i++) {
    if(charIndex.hasOwnProperty(s[i])) {
      j = Math.max(j, charIndex[s[i]] + 1);
    }
    charIndex[s[i]] = i;
    max = Math.max(max, i - j + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbb"))
console.log(lengthOfLongestSubstring(""))
