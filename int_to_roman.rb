# @param {Integer} num
# @return {String}
def int_to_roman(num)
  int_to_roman = {[1,0]=>"I", [5,0]=>"V", [1,1]=>"X", [5,1]=>"L", [1,2]=>"C", [5,2]=>"D", [1,3]=> "M"}
  roman = ""
  num_arr = num.to_s.split(//)
  num_arr.each_with_index do |val, index|
    first_digit = val.to_i
    weight = num_arr.length - 1 - index
    roman += case first_digit
             when 0 then ""
             when 1..3 then int_to_roman[[1, weight]] * first_digit
             when 4 then int_to_roman[[1,weight]] + int_to_roman[[5,weight]]
             when 5..8 then int_to_roman[[5,weight]] + int_to_roman[[1,weight]]*(first_digit-5)
             when 9 then int_to_roman[[1,weight]] + int_to_roman[[1,weight+1]]
             end
  end
  roman
end
