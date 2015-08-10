/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var invertHelper = function(root) {
    if(!root) return null;

    var tmp = root.left ;
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left);
    invertTree(root.right);
  };

  invertHelper(root);
  return root;
};
