# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
  require 'set'
  return 0 if haystack == needle
  patterns = Set.new
  (0...haystack.size).each do |i|
    pattern = haystack[i...(i+needle.size)]
    next if patterns.include?(pattern)
    return i if pattern == needle
    patterns.add(pattern)
  end
  -1
end
