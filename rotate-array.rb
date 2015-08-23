# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
  return nums if nums.empty?
  size = nums.size
  k = k % size
  double_nums = nums + nums

  (0...size).each do |index|
    nums[index] = double_nums[size+index-k]
  end
  nil
end
