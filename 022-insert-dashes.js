function insertDash(num) {
  const arr = num.toString().split("");
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      result.push(arr[i] + "-");
    } else {
      result.push(arr[i]);
    }
  }

  return result.join("");
}

console.log(insertDash(454793), "4547-9-3");
console.log(insertDash(1003567), "1003-567");
console.log(insertDash(123456), "123456");
