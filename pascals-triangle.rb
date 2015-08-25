# @param {Integer} num_rows
# @return {Integer[][]}
def generate(num_rows)
  return [] if num_rows == 0
  return [[1]] if num_rows == 1
  return [[1], [1,1]] if num_rows == 2
  triangle = [[1], [1,1]]
  index = 3
  while index < num_rows + 1
    pre_row = triangle.last
    row = (1...pre_row.size).map do |i|
      pre_row[i] + pre_row[i-1]
    end
    triangle.push([1] + row + [1])
    index += 1
  end
  triangle
end

p generate(5)
