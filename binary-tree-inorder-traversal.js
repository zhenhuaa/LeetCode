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
var inorderTraversal = function(root) {
  var toTraverse = [root];
  var inorder = [];
  var node;
  var isVisited = function(node) {
    return inorder.indexOf(node) !== -1;
  };

  while(root && toTraverse.length !== 0) {
    node = toTraverse[0];
    if(node.left !== null && !isVisited(node.left)) {
      toTraverse.unshift(node.left);
    }
    if(node.left === null || (node.left !== null && isVisited(node.left))) {
      toTraverse.shift();
      inorder.push(node);
      if(node.right !== null)  {
        toTraverse.unshift(node.right);
      }
    }
  }
  return inorder.map(function(x) {return x.val});
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var t1 = new TreeNode(1);
var t2 = new TreeNode(2);
var t3 = new TreeNode(3);
var t4 = new TreeNode(4);
var t5 = new TreeNode(5);
var t6 = new TreeNode(6);
t1.right = t2;
t2.left = t3;

console.log(inorderTraversal(t1));
