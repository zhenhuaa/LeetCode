# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  require 'set'
  return "" if strs.empty?
  common_prefix = ""
  min_size = strs.map(&:size).min
  (0...min_size).each do |i|
    if strs.map {|str| str[i]}.to_set.size == 1
      common_prefix += strs[0][i]
    else
      break
    end
  end
  common_prefix
end
