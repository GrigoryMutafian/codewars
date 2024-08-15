function abbrevName(name) {
  name = name.split(" ");
  return (name[0][0] + "." + name[1][0]).toUpperCase();
}

// console.log(abbrevName("Sam Harris"), "S.H");
const arr = [1, 2, 3, 4, 5, 6];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
  arr[i] = arr[i + 1];
}
