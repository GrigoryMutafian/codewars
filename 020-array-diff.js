function array_diff(arr, arr2) {
  arr2 = new Set(arr2);
  return arr.filter((num) => !arr2.has(num));
}

console.log(([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was []");
