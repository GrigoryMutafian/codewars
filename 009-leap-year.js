function isLeapYear(year) {
  if (
    (year % 100 === 0 && year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020), true, "Incorrect answer for year = 2020");
