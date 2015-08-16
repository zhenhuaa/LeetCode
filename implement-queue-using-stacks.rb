class Queue
    # Initialize your data structure here.
    def initialize()
      @in = []
      @out = []
    end

    # @param {Integer} x
    # @return {void}
    def push(x)
      @in.push x
    end

    # @return {void}
    def pop
      peek
      @out.pop
    end

    # @return {Integer}
    def peek
      @out.push @in.pop until @in.empty? if @out.empty?
      @out.last
    end

    # @return {Boolean}
    def empty
      @in.empty? && @out.empty?
    end
end
