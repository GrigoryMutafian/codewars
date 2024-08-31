function box(num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
      result.push("-".repeat(num));
    } else {
      result.push("-" + " ".repeat(num - 2) + "-");
    }
  }

  return result;
}

console.log(box(5), ["-----", "-   -", "-   -", "-   -", "-----"]);
