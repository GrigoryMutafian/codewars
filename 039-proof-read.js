function proofread(str) {
  let result = str.toLowerCase().split("");

  for (let i = 0; i < result.length; i++) {
    if (i === 0 || result[i - 2] === ".") {
      result[i] = result[i].toUpperCase();
    }
    if (result[i] === "i" && result[i + 1] === "e") {
      result[i] = "e";
      result[i + 1] = "i";
    }
  }

  return result.join("");
}

console.log(
  proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."),
  "Their deceit was inconceivable. She seized the moment."
);
