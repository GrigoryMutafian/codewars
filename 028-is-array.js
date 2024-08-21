function arrCheck(arr) {
  return arr.every((item) => Array.isArray(item));
}

console.log(arrCheck([["string"]]), true);
console.log(arrCheck([[1], [2], [3]]), true);
console.log(arrCheck(["A", "R", "R", "A", "Y"]), false);
