# @param {String} s
# @return {Boolean}
def is_valid(s)
  stack = []
  parentheses = {"("=>")", "{"=>"}", "["=>"]"}
  left_par = ["(", "{", "["]

  i = 0
  while i < s.size
    char = s[i]
    p stack

    if left_par.include?(char)
      stack << char
    else
      if parentheses[stack.last] != char
        return false
      else
        stack.pop
      end
    end
    p stack

    i += 1
  end

  stack.empty?
end
