/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var preorderTraversal = function(root) {
  var toTraverse = [root];
  var preorder = [];
  var node;
  while(root && toTraverse.length !== 0) {
    node = toTraverse.shift();
    preorder.push(node.val);
    if(node.right) toTraverse.unshift(node.right);
    if(node.left) toTraverse.unshift(node.left);
  }
  return preorder;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var t1 = new TreeNode(1);
var t2 = new TreeNode(2);
var t3 = new TreeNode(3);
var t4 = new TreeNode(4);
t1.left = t2;
t2.left = t3;
t1.right = t4;

console.log(preorderTraversal(t1));
console.log(preorderTraversal(null));
