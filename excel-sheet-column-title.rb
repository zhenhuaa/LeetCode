# @param {Integer} n
# @return {String}
def convert_to_title(n)
  alpha = ("A".."Z").to_a
  title = ""
  while n > 0
    rem = (n-1) % 26
    title = alpha[rem] + title
    n = (n-1) / 26
  end
  title
end
