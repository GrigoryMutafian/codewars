function checkExam(array1, array2) {
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result += 4;
    } else if (array2[i] === "") {
      continue;
    } else {
      result += -1;
    }
  }

  return result < 0 ? 0 : result;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
