# @param {String} s
# @return {Boolean}
def is_palindrome(s)
  s = s.tr("^a-zA-Z0-9", "").upcase
  return s.reverse == s
end
