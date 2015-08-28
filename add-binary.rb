# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
  max_size = [a.size, b.size].max
  a = a.rjust(max_size, "0")
  b = b.rjust(max_size, "0")
  sum = ""
  cy = 0

  (a.size-1).downto(0).each do |i|
    a_bit = a[i].to_i
    b_bit = b[i].to_i
    bit_sum = a_bit + b_bit + cy
    if bit_sum >= 2
      cy = 1
    else
      cy = 0
    end
    sum = (bit_sum % 2).to_s + sum
  end
  sum = "1" + sum if cy == 1

  sum
end
