function countSheep(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    result = result + `${i} sheep...`;
  }
  return result;
}

console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
