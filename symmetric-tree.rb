# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}
def is_symmetric(root)
  return true if root.nil?
  is_symmetric_helper = ->(tree1, tree2) {
    return true if tree1.nil? && tree2.nil?
    return false if tree1.nil? || tree2.nil?
    tree1.val == tree2.val && is_symmetric_helper.(tree1.left, tree2.right) && is_symmetric_helper.(tree1.right, tree2.left)
  }
  is_symmetric_helper.(root.left, root.right)
end
