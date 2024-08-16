function createPhoneNumber(numbers) {
  let count = 0;
  const result = ["(", 0, 0, 0, ")", " ", 0, 0, 0, "-", 0, 0, 0, 0];

  result[1] = numbers[0];
  result[2] = numbers[1];
  result[3] = numbers[2];
  result[6] = numbers[3];
  result[7] = numbers[4];
  result[8] = numbers[5];
  result[10] = numbers[6];
  result[11] = numbers[7];
  result[12] = numbers[8];
  result[13] = numbers[9];

  return result.join("");
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
