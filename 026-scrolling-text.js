function scrollingText(text) {
  let currentStr = text.split("");
  let result = [text.toUpperCase()];

  for (let i = 0; i < text.length - 1; i++) {
    currentStr.push(currentStr[0]);
    let arr = [];

    for (let y = 1; y < currentStr.length; y++) {
      arr.push(currentStr[y]);
    }

    result.push(arr.join("").toUpperCase());
    currentStr = arr;
  }

  return result;
}

console.log(scrollingText("abc"), ["ABC", "BCA", "CAB"]);
