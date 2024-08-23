function smallEnough(arr, limit) {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      result = false;
    }
  }

  return result;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
