function getCount(str) {
  let result = 0;
  const newArr = str.split("");

  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i] === "a" ||
      newArr[i] === "e" ||
      newArr[i] === "i" ||
      newArr[i] === "o" ||
      newArr[i] === "u"
    ) {
      result++;
    }
  }

  return result;
}

console.log(getCount("abracadabra"), 5);
