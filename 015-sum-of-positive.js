function positiveSum(arr) {
  result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }

  return result;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
