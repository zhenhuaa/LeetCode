# @param {Integer} n
# @return {Integer}
def count_primes(n)
  return 0 if n <= 2
  return 1 if n == 3

  is_primes = Array.new(n, true)
  count = n - 2
  i = 2
  while i * i < n
    if is_primes[i]
      ((i*i)...n).step(i).each {|number|
        if is_primes[number]
          is_primes[number] = false
          count -= 1
        end
      }
    end
    i += 1
  end

  count
end
