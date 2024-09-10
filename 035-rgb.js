const result = [];

function pushNums(color) {
  let letter = color.toString(16);
  if (letter.length === 1) {
    letter = "0" + letter;
  }
  result.push(letter);
}

function check(color) {
  if (color > 255) {
    return 255;
  } else if (color < 0) {
    return 0;
  }
  return color;
}

function rgb(red, green, blue) {
  let newHashOfRed = check(red);
  let newHashOfGreen = check(green);
  let newHashOfBlue = check(blue);

  pushNums(newHashOfRed);
  pushNums(newHashOfGreen);
  pushNums(newHashOfBlue);

  return result.join("").toUpperCase();
}

console.log(rgb(300, 255, 255));
