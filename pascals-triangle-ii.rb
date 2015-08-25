# @param {Integer} row_index
# @return {Integer[]}
def get_row(row_index)
  return [1] if row_index == 0
  pre_row = [1]
  index = 1
  while index < row_index + 1
    row = (1...pre_row.size).map do |i|
      pre_row[i] + pre_row[i-1]
    end
    pre_row = [1] + row + [1]
    index += 1
  end
  pre_row
end
