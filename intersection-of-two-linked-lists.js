/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  nodeA = headA;
  nodeB = headB;
  aTurnedB = false;
  bTurnedA = false;

  while(nodeA || nodeB) {
    if(nodeA === nodeB) return nodeA;
    nodeA = nodeA && nodeA.next;
    nodeB = nodeB && nodeB.next;
    if(!nodeA&& !aTurnedB) {
      nodeA = headB;
      aTurnedB = true;
    }
    if(!nodeB && !bTurnedA) {
      nodeB = headA;
      bTurnedA = true;
    }
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
headA = new ListNode(1);
headB = new ListNode(1);
node3 = new ListNode(3);
interNode = new ListNode(2);
node3.next = interNode;
headA.next = node3;
headB.next = interNode;

console.log(getIntersectionNode(undefined, undefined));
console.log(getIntersectionNode(headA, headB));
