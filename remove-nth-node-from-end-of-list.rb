# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
  fake_head = ListNode.new(-1)
  fake_head.next = head
  fast = fake_head
  slow = fake_head
  (n+1).times {
    fast = fast.next
  }
  while fast
    fast = fast.next
    slow = slow.next
  end
  slow.next = slow.next.next

  fake_head.next
end
