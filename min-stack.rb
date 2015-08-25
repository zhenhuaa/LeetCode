class MinStack
  # Initialize your data structure here
  def initialize
    @data = []
    @min = nil
  end

  # @param {Integer} x
  # @return {Void} nothing
  def push(x)
    @data.push x
    @min = x if @min.nil?
    @min = [x, @min].min
  end

  # @return {Void} nothing
  def pop
    if self.top == @min
      @data.pop
      @min = @data.min
    else
      @data.pop
    end
  end

  # @return {Integer}
  def top
    @data.last
  end

  # @return {Integer}
  def get_min
    @min
  end
end
