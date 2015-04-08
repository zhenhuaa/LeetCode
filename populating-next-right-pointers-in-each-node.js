/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if(root === null) return;
  var nodes = [root];
  var nodesTmp;
  while(nodes.length > 0) {
    nodesTmp = [];
    for(var i = 0; i < nodes.length; i++) {
      nodes[i].next = (i != nodes.length-1 ?  nodes[i+1] : null);
      if(nodes[i].left && nodes[i].right)  {
        nodesTmp = nodesTmp.concat([nodes[i].left, nodes[i].right]);
      }
    }
    nodes = nodesTmp;
  }
};

function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

var t1 = new TreeLinkNode(1);
var t2 = new TreeLinkNode(2);
var t3 = new TreeLinkNode(3);

t1.left = t2;
t1.right = t3;

connect(t1);
console.log(t1);
