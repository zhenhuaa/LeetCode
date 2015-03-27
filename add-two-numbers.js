/*You are given two linked lists representing two non-negative numbers.
 *The digits are stored in reverse order and each of their nodes contain a single digit. 
 *Add the two numbers and return it as a linked list.

 *Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 *Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2){
  var numA = l1;
  var numB = l2;
  var preNode = null;
  var sum, sumNode;
  var cflag = 0;

  while(true) {
    sum = ((numA === null ? 0 : numA.val) +
           (numB === null ? 0 : numB.val)) + cflag;
    if(sum < 10) {
      cflag = 0;
      sumNode = new ListNode(sum);
    } else {
      cflag = 1;
      sumNode = new ListNode(sum - 10);
    }

    if(preNode) {
      preNode.next = sumNode;
    } else {
      sumRoot = sumNode;
    }
    preNode = sumNode;

    if(numA) numA = numA.next;
    if(numB) numB = numB.next;
    if(cflag === 0 && numA === null && numB === null) break;
  }
  return sumRoot;
};

function ListNode(val) {
  this.val = val;
  this.next = null;

  this.toString = function() {
    var nodetmp = this;
    var str = "";
    while(nodetmp) {
      str += nodetmp.val;
      if(nodetmp.next) {
        str += " -> ";
      }
      nodetmp = nodetmp.next;
    }
    return str;
  };
}

var node2  = new ListNode(2);
var node4 = new ListNode(4);
var node3 = new ListNode(3);
var node7 = new ListNode(7);
node2.next = node4;
node4.next = node3;
node3.next = node7;
var l1 = node2;

var node5  = new ListNode(5);
var node6 = new ListNode(6);
var node4 = new ListNode(6);
node5.next = node6;
node6.next = node4;
var l2 = node5;

console.log(l1.toString());
console.log(l2.toString());
console.log(addTwoNumbers(l1, l2).toString());
