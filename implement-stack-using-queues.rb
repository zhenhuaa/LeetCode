class Stack
    # Initialize your data structure here.
    def initialize
        @store = []
    end

    # @param {Integer} x
    # @return {void}
    def push(x)
      @store << x
      (@store.size-1).times {@store << @store.shift}
    end

    # @return {void}
    def pop
      @store.shift
    end

    # @return {Integer}
    def top
      @store.first
    end

    # @return {Boolean}
    def empty
      @store.empty?
    end
end
