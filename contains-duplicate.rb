# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    require 'set'
    nums.to_set.size != nums.size
end
