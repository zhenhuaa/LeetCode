# @param {Integer} n
# @return {String}
def count_and_say(n)
  say_it = -> (num_str) {
    say_str_list = []
    pre_char = ""
    i = 0
    while i < num_str.size
      char = num_str[i]
      if char == pre_char
        say_str_list[-1][0] += 1
      else
        say_str_list << [1, char]
      end
      pre_char = char
      i += 1
    end
    say_str_list.map {|cnt_and_char| cnt_and_char[0].to_s + cnt_and_char[1]}.join
  }
  seq = "1"
  return "1" if n == 1
  (n-1).times do
    seq = say_it.(seq)
  end
  seq
end
