function min(arr, toReturn) {
  let result = arr[0];
  let resultIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
      resultIndex = i;
    }
  }

  return toReturn === "value" ? result : resultIndex;
}

console.log(([1, 2, 3, 4, 5], "value"), 1);
console.log(min([1, 2, 3, 4, 5], "index"), 0);
