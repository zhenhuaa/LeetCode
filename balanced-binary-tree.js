/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns boolean
 */
var isBalanced = function(root) {
  var treeDepth = function(root) {
    return root? 1 + Math.max(treeDepth(root.left), treeDepth(root.right)) : 0;
  };

  return root? isBalanced(root.left) && isBalanced(root.right) && Math.abs(treeDepth(root.left) - treeDepth(root.right)) <= 1 : true;
};
