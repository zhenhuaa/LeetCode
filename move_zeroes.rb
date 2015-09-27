# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  zero_cnt = 0
  length = nums.length
  (length-1).downto(0) do |i|
    if nums[i] == 0
      i.upto(length-zero_cnt-1) do |j|
        nums[j] = nums[j+1]
      end
      zero_cnt += 1
      nums[length - zero_cnt] = 0
    end
  end
end

nums = [0, 1, 0, 3, 12]
move_zeroes(nums)
p nums
