function positiveSum(arr) {
  res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res += arr[i];
    }
  }

  return res;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
