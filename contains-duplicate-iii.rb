# @param {Integer[]} nums
# @param {Integer} k
# @param {Integer} t
# @return {Boolean}
def contains_nearby_almost_duplicate(nums, k, t)
  size = nums.size
  sorted = nums.each_with_index.map {|val, index| [val, index]}.sort_by &:first

  for i in 0...size
    for j in i+1...size
      if sorted[j].first - sorted[i].first <= t
        if (sorted[j].last - sorted[i].last).abs <= k
          return true
        end
      else
        break
      end
    end
  end

  false
end
