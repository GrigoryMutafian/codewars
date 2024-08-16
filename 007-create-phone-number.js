function createPhoneNumber(numbers) {
  let res = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    res = res.replace("x", numbers[i]);
  }

  return res;
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
