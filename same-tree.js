/**
 *  *  * Definition for binary tree
 *   *   * function TreeNode(val) {
 *    *    *     this.val = val;
 *     *     *     this.left = this.right = null;
 *      *      * }
*       *       */

/**
 *  *  * @param {TreeNode} p
 *   *   * @param {TreeNode} q
 *    *    * @returns {boolean}
 *     *     */
 var isSameTree = function(p, q) {
  if(p === null && q === null) return true;
  if(p && q) return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return false;
 };
