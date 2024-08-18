function digPow(numbers, steps) {
  let arrNum = numbers.toString().split("").map(Number);
  let result = 0;

  for (let i = 0; i < arrNum.length; i++) {
    result += arrNum[i] ** steps;
    steps++;
    console.log(result);
  }

  return result % numbers === 0 ? result / numbers : -1;
}

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
