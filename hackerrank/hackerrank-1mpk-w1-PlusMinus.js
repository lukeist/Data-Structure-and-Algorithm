// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/
// p: arr of ints
// r: print to console: float .xxxxxx
// e:
// arr = [1,1,0,-1,-1] => 0.400000 0.400000 0.200000
// arr = [-4, 3, -9, 0, 4, 1] =>0.500000 0.333333 0.166667

function plusMinus(arr) {
  // filter +int
  const posInt = (arr.filter((num) => num > 0).length / arr.length).toFixed(6);
  // filter 0
  const zero = (arr.filter((num) => num === 0).length / arr.length).toFixed(6);
  // filter -int
  const negInt = (arr.filter((num) => num < 0).length / arr.length).toFixed(6);
  console.log(+posInt);
  console.log(+negInt);
  console.log(+zero);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
