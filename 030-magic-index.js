function findMagic(arr) {
  let result = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      result = i;
    }
  }

  return result;
}

console.log(findMagic([-20, -10, 2, 10, 20]), 2);
console.log(findMagic([6, 5, 83, 5, 3, 18]), -1);
