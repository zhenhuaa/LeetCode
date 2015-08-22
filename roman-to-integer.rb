# @param {String} s
# @return {Integer}
def roman_to_int(s)
  roman_char_to_int = {"I"=>1, "V"=>5, "X"=>10, "L"=>50, "C"=>100, "D"=>500, "M"=>1000 }
  sum = 0
  index = s.length - 1
  pre_char_num = 0
  while index >= 0
    char_num = roman_char_to_int[s[index]]
    if char_num >= pre_char_num
      sum += char_num
    else
      sum -= char_num
    end
    pre_char_num = char_num
    index -= 1
  end
  sum
end
