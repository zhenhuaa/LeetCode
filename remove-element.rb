# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  nums.reject! {|x| x == val}
  nums.nil? ? 0 : nums.size
end
