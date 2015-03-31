class Solution:
    # @return an integer
    def reverse(self, x):
        maxint = 2**31 -1
        sign = (x >= 0)
        x = abs(x)
        res = 0
        while(x != 0):
            res = res * 10 + x % 10
            x /= 10
        if(res > maxint):
            return 0
        if(sign == False):
            res = -res;
        return res
