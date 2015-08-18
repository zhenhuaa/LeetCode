# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
  s_char_index = Hash.new(-1)
  t_char_index = Hash.new(-1)

  for i in 0...s.size
    return false if s_char_index[s[i]] != t_char_index[t[i]]
    s_char_index[s[i]] = i
    t_char_index[t[i]] = i
  end

  true
end
