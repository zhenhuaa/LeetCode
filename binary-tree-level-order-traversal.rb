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
def level_order(root)
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
  nodes.map {|x| x.map(&:val)}
end


class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

head = TreeNode.new 3
node9 = TreeNode.new 9
node20 = TreeNode.new 20
node15 = TreeNode.new 15
node7 = TreeNode.new 7

head.left = node9
head.right = node20
node20.left = node15
node20.right = node7

p level_order(head)
