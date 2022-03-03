// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// parameters: array of arrays
// return: array of strings
// examples:
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  // map data to conditionals:
  ////  index 0 >=55 && handi >7 => senior
  //// else open
  return data.map((item) => (item[0] >= 55 && item[1] > 7 ? "Senior" : "Open"));
  // better:   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
