# @param {Integer} n
# @return {Boolean}
def is_happy(n)
  require 'set'
  nums = Set.new

  is_happy_helper = ->(num) {
    return true if num == 1
    return false if nums.include? num
    nums.add num
    is_happy_helper.(num.to_s.each_char.map {|x| x.to_i ** 2}.reduce(&:+))
  }

  is_happy_helper.(n)
end
