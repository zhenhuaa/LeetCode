/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  var stepOne = head;
  var stepTwo = head;
  var meetTimes = 0;

  while(stepTwo !== null) {
    if(stepOne === stepTwo) {
      meetTimes += 1;
    }
    if(meetTimes > 1) return true;
    stepOne = stepOne.next;
    if(stepTwo.next !== null) {
      stepTwo = stepTwo.next.next;
    } else {
      stepTwo = stepTwo.next;
    }
  }
  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var t1 = new ListNode();
var t2 = new ListNode();
var t3 = new ListNode();
var t4 = new ListNode();
var t5 = new ListNode();

t2.next = t3;
t3.next = t2;
t4.next = t5;

console.log(hasCycle(t1));
console.log(hasCycle(t2));
console.log(hasCycle(t4));
