# @param {String} version1
# @param {String} version2
# @return {Integer}
def compare_version(version1, version2)
  version1_arr = version1.split(/\./)
  version2_arr = version2.split(/\./)
  size = [version1_arr.size, version2_arr.size].max
  i = 0
  while i < size
    v1 = if i < version1_arr.size then version1_arr[i].to_i else 0 end
    v2 = if i < version2_arr.size then version2_arr[i].to_i else 0 end
    return 1 if v1 > v2
    return -1 if v1 < v2
    i+=1
  end
  0
end
