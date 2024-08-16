function nbYear(p0, percent, aug, p) {
  let countOfpeople = p0;
  let whiles = 0;

  while (countOfpeople <= p) {
    countOfpeople += Math.floor(countOfpeople * (percent / 100) + aug);
    whiles++;
  }

  return whiles;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
