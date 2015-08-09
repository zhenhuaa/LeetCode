/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var node = head;
  var preHead = new ListNode();
  preHead.next = head;
  var pre = preHead;

  while(node) {
    if(node.val === val) {
      pre.next = node.next;
    } else {
      pre = node;
    }
    node = node.next;
  }
  return preHead.next;
};
