int maxProfit(int prices[], int n){
  if(n == 0) return 0;
  int findMin = 1;
  int min = prices[0];
  int max = -1;
  int maxProfitRes = 0;
  int i, e;
  for(i = 0; i < n; i++) {
    e = prices[i];
    if(findMin) {
      if(e < min) {
        min = e;
      } 
      if (e > min) {
        max = e;
        findMin = 0;
      }
    } else {
      if( e > max) {
        max = e;
      }
      if( e < max) {
        maxProfitRes += (max - min);
        min = e;
        max = -1;
        findMin = 1;
      }
    }
    if(max != -1 &&  i == n - 1) {
      maxProfitRes += (max - min);
    }
  }
  return maxProfitRes;
}
