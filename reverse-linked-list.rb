# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
  return nil if head.nil?
  pre_node = head
  node = head.next
  head.next = nil
  while node
    next_node = node.next
    node.next = pre_node
    pre_node = node
    node = next_node
  end
  pre_node
end
