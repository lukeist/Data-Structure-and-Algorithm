// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// prep
// parameters: number int +- whole / no float, no string, no null, undefined, no funny stuff
// return: int num / no print to console
// examples: 232 => 4+9+4 / 100 => 1+0+0 /
const squareDigits = (num) => {
  // convert num to string
  // convert num to array
  // map char => num * num => convert to string
  // reduce => concat them all => convert to number
  return +num
    .toString()
    .split("")
    .map((c) => (+c * +c).toString())
    .reduce((p, c) => p + c); // or .join('') would be better
};
