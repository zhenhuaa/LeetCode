# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
  length = nums.length
  left_product = Hash.new(1)
  0.upto(length-1).each do |i|
    left_product[i] = left_product[i-1] * nums[i]
  end

  right_product = Hash.new(1)
  (length-1).downto(0).each do |i|
    right_product[length-i] = right_product[length-i-1] * nums[i]
  end


  0.upto(length-1).map do |i|
    left_product[i-1] * right_product[length-i-1]
  end

end

nums = [1,2,3,4]
p product_except_self(nums)
