int numTrees(int n) {
  static int cache[1024] = {1, 1, 2, 5};
  int numOfTrees = 0;
  if(!cache[n]) {
    for(int i = 0; i < n; i++) {
      numOfTrees += numTrees(i) * numTrees(n - 1 - i);
      cache[n] = numOfTrees;
    }
  }
  return cache[n];
}
