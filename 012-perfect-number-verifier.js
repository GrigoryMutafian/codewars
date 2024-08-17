function isPerfect(number) {
  let currentNum = 0;
  let divider = 2;
  let result = 0;

  if (number === 1) {
    return false;
  } else if (number % 2 !== 0) {
    return false;
  }

  while (currentNum !== 1) {
    currentNum = Math.round(number / divider);
    result += currentNum;
    divider = divider * 2;
  }

  return result === number ? true : false;
}

console.log(isPerfect(6), true);
console.log(isPerfect(28), true);
console.log(isPerfect(4986), false);
console.log(isPerfect(10), false);
console.log(isPerfect(496), true);
console.log(isPerfect(8128), true);
console.log(isPerfect(23459879034), false);
console.log(isPerfect(1098), false);
console.log(isPerfect(33550336), true);
console.log(isPerfect(1), false);
