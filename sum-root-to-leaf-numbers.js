/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if(!root) return 0;
  var paths = [[root]];
  var leafPaths = [];
  var path;
  var hasChild = function(node) {return node && (node.left || node.right);};

  while(paths.length > 0) {
    path = paths.shift();
    node = path[path.length - 1];
    if(hasChild(node)) {
      if(node.left) {
        paths.push(path.concat([node.left]));
      }
      if(node.right) {
        paths.push(path.concat([node.right]));
      }
    } else {
      leafPaths.push(path);
    }
  }
  var pathSum = function(path) {
    var nodeValue = function(node) {return node.val;};
    return parseInt(path.map(nodeValue).join(""));
  };
  var add = function(a, b) {return a + b;};
  return leafPaths.map(pathSum).reduce(add);
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
console.assert(sumNumbers(tree1) === 25);
