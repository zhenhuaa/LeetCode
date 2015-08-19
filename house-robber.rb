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

# @param {Integer[]} nums
# @return {Integer}
memoize def rob(nums)
  return 0 if nums.empty?
  return nums.max if nums.size <= 2
  size = nums.size
  [rob(nums[0...size-2]) + nums.last, rob(nums[0...size-1])].max
end
