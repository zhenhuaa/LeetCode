# @param {Integer} num
# @return {Integer}
def add_digits(num)
  return num if num < 10
  add_digits(num.to_s.split(//).map(&:to_i).reduce(:+))
end
