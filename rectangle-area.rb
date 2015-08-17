# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @param {Integer} d
# @param {Integer} e
# @param {Integer} f
# @param {Integer} g
# @param {Integer} h
# @return {Integer}
def compute_area(a, b, c, d, e, f, g, h)
  rect_area1 = ((a-c)*(b-d)).abs
  rect_area2 = ((e-g)*(f-h)).abs
  x_diff = [[c,g].min - [a,e].max, 0].max
  y_diff = [[d,h].min - [b,f].max, 0].max
  inter_area = (x_diff * y_diff).abs
  rect_area1 + rect_area2 - inter_area
end
