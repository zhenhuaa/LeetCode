/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(root === null) return [];
  var leftRSV = [root.val].concat(rightSideView(root.left));
  var rightRSV = [root.val].concat(rightSideView(root.right));
  if(leftRSV.length > rightRSV.length) {
    return rightRSV.concat(leftRSV.slice(rightRSV.length, leftRSV.length));
  }
  return rightRSV;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);

root.left = node2;
root.right = node3;
node2.right = node5;
node3.right = node4;

var array_eq = function(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.assert(array_eq(rightSideView(root), [1, 3, 4]));
