function removeChar(str) {
  let result = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result.pop();
    } else if (i === str.length - 1) {
      result.shift();
    }
  }

  return result.join("");
}

console.log(removeChar("eloquent"), "loquen");
