# @param {Integer} n
# @return {Integer}
def trailing_zeroes(n)
  cnt = 0
  while n > 0
    five_times = n / 5
    cnt += five_times
    n = five_times
  end
  cnt
end
