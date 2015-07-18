/* Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode a}
 */
var mergeTwoLists = function(l1, l2) {
  var p1 = l1,
    p2 = l2,
    head = new ListNode(),
    pre =head,
    newNode;

  while(p1 && p2) {
    if(p1.val < p2.val) {
      newNode = new ListNode(p1.val);
      p1 = p1.next;

    } else {
      newNode = new ListNode(p2.val);
      p2 = p2.next;
    }
    pre.next = newNode;
    pre = newNode;
  }

  while(p1) {
    newNode = new ListNode(p1.val);
    pre.next = newNode;
    pre = newNode;
    p1 = p1.next;
  }

  while(p2) {
    newNode = new ListNode(p2.val);
    pre.next = newNode;
    pre = newNode;
    p2 = p2.next;
  }

  return head.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
var l1_2 = new ListNode(3);
l1.next = l1_2;

var l2 = new ListNode(2);
var l2_2 = new ListNode(3);
l2.next = l2_2;

var printList = function(list) {
  var node = list;
  var res = [];
  while(node) {
    res.push(node.val);
    node = node.next;
  }
  console.log(res.join("->"));
};

printList(mergeTwoLists(l1, l2));
printList(mergeTwoLists(l1_2, l2));
printList(mergeTwoLists(null, l2));
printList(mergeTwoLists(null, null));
