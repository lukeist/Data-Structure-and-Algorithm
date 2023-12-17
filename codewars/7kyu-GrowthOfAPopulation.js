// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

// parameters: p0: num +int - percent: num/nul +float - aug: num +-int - p: num +int
// return: num
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

function nbYear(p0, percent, aug, p) {
  // summary:
  // zero year: p0
  // first year: p1 = p0 + p0 * percent + aug
  // second year: p2 = p1 + p1 * percent + aug
  // ...
  let year = 0;
  // use while p0 < p
  //// while: add people to p0 each loop following: p0 += p0 * percent + aug
  while (p0 < p) {
    p0 += Math.floor(p0 * (percent / 100) + aug);
    year++;
  }
  return year;
}
