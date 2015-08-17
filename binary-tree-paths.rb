# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {String[]}
def binary_tree_paths(root)
  binary_tree_paths_helper = ->(node) {
    return [] if node.nil?
    left_paths = binary_tree_paths_helper.(node.left)
    right_paths = binary_tree_paths_helper.(node.right)
    paths = left_paths + right_paths
    return [[node.val]] if paths.empty?
    paths.map {|path| path.unshift(node.val)}
  }
  binary_tree_paths_helper.(root).map{|path| path.join("->")}
end
