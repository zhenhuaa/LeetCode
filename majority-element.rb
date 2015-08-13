# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
  return nil if nums.empty?
  vote = nums[0]
  vote_count = 0
  nums.each do |n|
    if n == vote
      vote_count += 1
    else
      vote_count -= 1
    end
    if vote_count < 0
      vote = n
      vote_count = 1
    end
  end
  vote
end
