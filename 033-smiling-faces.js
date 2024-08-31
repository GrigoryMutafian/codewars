function countSmileys(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];

    if (str.length >= 2 && str.length <= 3) {
      let hasStart = str.includes(":") || str.includes(";");
      let hasEnd = str.includes(")") || str.includes("D");
      let hasMiddle =
        str.length === 3 ? str.includes("-") || str.includes("~") : true;

      if (hasStart && hasEnd && hasMiddle) {
        result += 1;
      }
    }
  }

  return result;
}

console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);

console.log(countSmileys([]), 0);
