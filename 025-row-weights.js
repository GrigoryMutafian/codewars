function rowWeights(array) {
  const result = [0, 0];

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result[0] += array[i];
    } else if (i % 2 === 0) {
      result[0] += array[i];
    } else {
      result[1] += array[i];
    }
  }

  return result;
}

console.log(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
console.log(rowWeights([100, 50]), [100, 50]);
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
console.log(rowWeights([80]), [80, 0]);
