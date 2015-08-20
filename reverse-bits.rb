# @param {Integer} n, a positive integer
# @return {Integer}
def reverse_bits(n)
  arr = n.to_s(2).rjust(32, '0').split(//).map(&:to_i)
  sum = 0
  arr.each_with_index do |bit, index|
    sum += bit * 2**index
  end
  sum
end
