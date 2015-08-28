# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Integer[][]}
def level_order_bottom(root)
  return [] if root.nil?
  nodes = [[root]]
  while true
    last_row = nodes.last
    row = []
    last_row.each do |node|
      row << node.left if node.left
      row << node.right if node.right
    end
    break if row.empty?
    nodes << row
  end
  nodes.map {|x| x.map(&:val)}.reverse
end
