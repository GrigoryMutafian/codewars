function findShort(str) {
  let result = 999;
  let newArr = str.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length < res) {
      result = newArr[i].length;
    }
  }

  return result++;
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  3
);
