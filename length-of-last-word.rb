# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    if s.split.empty? then 0 else s.split.last.length end
end
