function arrayDiff(arr1, arr2) {
  let result = arr1.filter(function (element) {
    return arr2.indexOf(element) === -1;
  });

  return result;
}

console.log(([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was []");
