# @param {Integer[]} nums
# @return {String[]}
def summary_ranges(nums)
  return [] if nums.empty?
  ranges = [[nums.first, nums.first]]

  nums.each do |num|
    range = ranges.last
    if num - range.last > 1
      ranges << [num, num]
    else
      range[-1] = num
    end
  end
  ranges.map {|k,v| k == v ? "#{k}" : "#{k}->#{v}"}
end
