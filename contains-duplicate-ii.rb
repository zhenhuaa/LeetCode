# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
  duplicates = {}
  nums.each_with_index do |num, index|
    if duplicates.has_key? num
      duplicates[num] << index
    else
      duplicates[num] = [index]
    end
  end
  duplicates.select! {|val, indexes| indexes.size > 1}

  duplicates.any? do |val, indexes|
    (1...indexes.size).any? do |index|
      indexes[index] - indexes[index-1] <= k
    end
  end
end
