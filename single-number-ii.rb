# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  nums.each_with_object(Hash.new(0)) {|num, counts| counts[num]+=1}.select {|num, count| count == 1}.first.first
end
