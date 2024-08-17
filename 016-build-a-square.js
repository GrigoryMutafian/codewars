function generateShape(integer) {
  let symbol = "+";
  let str = symbol.repeat(integer);
  let str2 = str + "\n";

  return str2.repeat(integer - 1) + str;
}

console.log(
  generateShape(8),
  "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
);
