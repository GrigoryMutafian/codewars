function capitals(word) {
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 60 && word.charCodeAt(i) <= 90) {
      result.push(i);
    }
  }

  return result;
}

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
