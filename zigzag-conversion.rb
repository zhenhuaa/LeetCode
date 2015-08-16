# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
  size = s.size
  index = 0
  location_to_char = {}
  x = 0
  y = 0
  goDown = true
  while index < size
    location_to_char[[x,y]] = s[index]
    goDown = false if y == num_rows - 1
    goDown = true if y == 0
    if goDown
      y += 1
    else
      x += 1
      y -= 1
    end
    index += 1
  end

  location_to_char.group_by {|location, char| location.last}.map{|row, location_to_char_list|
    location_to_char_list.map(&:last).join
  }.join
end

puts convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR"
