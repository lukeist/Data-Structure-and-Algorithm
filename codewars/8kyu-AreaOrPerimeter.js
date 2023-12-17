// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

// prep
// parameters: number int whole + / no floated, no -, no string, no null, no undefined, no funny stuff
// return number / not console.log
// exampls: (5,5) => 25 ; (5,6) => 22

const areaOrPerimeter = function (l, w) {
  // conditional
  // if l===w => square
  // else ==> 2l + 2w
  return l === w ? l * w : 2 * l + 2 * w;
};
