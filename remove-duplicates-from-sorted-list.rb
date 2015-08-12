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
def delete_duplicates(head)
  return head if head.nil?
  pre = head
  visit = head.next
  while visit
    if visit.val != pre.val
      pre.next = visit
      pre = visit
    end
    visit = visit.next
  end
  if pre.next != visit
    pre.next = nil
  end
  head
end
