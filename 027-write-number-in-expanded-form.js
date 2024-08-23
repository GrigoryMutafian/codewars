function expandedForm(num) {
  const arr = num.toString().split("").reverse("");
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "0") {
      result.unshift(arr[i] + "0".repeat(i));
    }
  }

  return result.join(" + ");
}

console.log(expandedForm(70304), "70000 + 300 + 4");
console.log(expandedForm(42), "40 + 2");
