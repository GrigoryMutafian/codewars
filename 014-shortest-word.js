function findShort(s) {
  let res = 999;
  let newArr = s.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length < res) {
      res = newArr[i].length;
    }
  }

  return res++;
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  3
);
