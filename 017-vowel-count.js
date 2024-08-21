function getCount(str) {
  let result = 0;
  const newArr = str.split("");
  const step = newArr[i];

  for (let i = 0; i < newArr.length; i++) {
    if (
      step === "a" ||
      step === "e" ||
      step === "i" ||
      step === "o" ||
      step === "u"
    ) {
      result++;
    }
  }

  return result;
}

console.log(getCount("abracadabra"), 5);
