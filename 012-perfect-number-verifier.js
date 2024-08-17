function isPerfect(n) {
  let currentNum = 0;
  let divide = 2;
  let res = 0;

  if (n === 1) {
    return false;
  } else if (n % 2 !== 0) {
    return false;
  }

  while (currentNum !== 1) {
    currentNum = Math.round(n / divide);
    res += currentNum;
    divide = divide * 2;
  }
  console.log(n, res);
  return res === n ? true : false;
}

console.log(isPerfect(8483952), true);
