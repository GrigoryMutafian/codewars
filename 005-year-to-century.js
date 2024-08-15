const getCentury = (year) => {
  let century = Math.floor(year / 100);

  return year / 100 > century ? century + 1 : century;
};

console.log(getCentury(1705), 18, "Testing for year 1705");
console.log(getCentury(1900), 19, "Testing for year 1900");
console.log(getCentury(1601), 17, "Testing for year 1601");
console.log(getCentury(2000), 20, "Testing for year 2000");
console.log(getCentury(89), 1, "Testing for year 89");
