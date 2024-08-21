function filterHomogenous(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      const firstElem = arr[i][0];

      if (arr[i].every((elem) => typeof elem === typeof firstElem)) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(
  filterHomogenous(
    [[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]],
    [[1, 5, 4], ["b"]]
  )
);

console.log(
  filterHomogenous([
    [123, 234, 432],
    ["", "abc"],
    [""],
    ["", 1],
    ["", "1"],
    [],
  ]),
  [[123, 234, 432], ["", "abc"], [""], ["", "1"]]
);
