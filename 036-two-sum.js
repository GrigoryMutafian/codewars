function twoSum(numbers, target) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i < numbers.length - 1) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          result.push(numbers[i]);
          result.push(numbers[j]);
        }
      }
    }
  }

  return result;
}

console.log(twoSum([1, 2, 3], 4));

console.log(twoSum([1234, 5678, 9012], 14690));

console.log(twoSum([2, 2, 3], 4));
