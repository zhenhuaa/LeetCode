
def memoize(fn)
  cache = {}
  fxn = singleton_class.instance_method(fn)
  define_singleton_method fn do |*args|
    unless cache.include?(args)
      cache[args] = fxn.bind(self).call(*args)
    end
    cache[args]
  end
end


# @param {Integer} n
# @return {Integer}
memoize def climb_stairs(n)
  return 1 if n < 3
  climb_stairs(n-1) + climb_stairs(n-2)
end
