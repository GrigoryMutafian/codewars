function rgb(red, green, blue) {
  const result = [];

  function check(color) {
    if (color > 255) {
      return 255;
    } else if (color < 0) {
      return 0;
    }
    return color;
  }

  red = check(red);
  green = check(green);
  blue = check(blue);

  function pushNums(color) {
    let letter = color.toString(16);
    if (letter.length === 1) {
      letter = "0" + letter;
    }
    result.push(letter);
  }

  pushNums(red);
  pushNums(green);
  pushNums(blue);

  return result.join("").toUpperCase();
}

console.log(rgb(300, 255, 255));
