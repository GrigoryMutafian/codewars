function getLengthOfMissingArray(arrayOfArrays) {
  let lengthes = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (
      typeof arrayOfArrays[i] === null ||
      typeof arrayOfArrays[i] === undefined ||
      arrayOfArrays[i].length === 0
    ) {
      return 0;
    }
    lengthes.push(arrayOfArrays[i].length);
  }

  if (arrayOfArrays.length === 0) {
    return 0;
  }

  lengthes.sort((a, b) => a - b);

  let result = lengthes[0];

  for (let j = 0; j < lengthes.length; j++) {
    result++;

    if (lengthes[j] + 1 !== lengthes[j + 1]) {
      break;
    }
  }

  return result;
}

console.log(
  getLengthOfMissingArray([
    [4, 3, 0],
    [3, 4, 4, 1, 1],
    [2, 1, 0, 3, 4, 2, 2, 2],
    [2, 4, 1, 4, 2, 1, 1, 3, 1, 1, 1],
    [4, 1, 1, 2, 1, 1],
    [4, 0, 1, 4],
    [1, 0, 3, 2, 2, 3, 0, 4, 1, 3],
    [0, 1, 1, 1, 4, 2, 4],
  ]),
  9
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(getLengthOfMissingArray([]), 0);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ]),
  5
);
console.log(getLengthOfMissingArray([]), 0);
