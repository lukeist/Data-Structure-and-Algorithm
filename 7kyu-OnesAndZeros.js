// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

// p: arr of int
// r: num
// e:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = (arr) => {
  console.log(arr.join("").toString(10));
  // your code
};

binaryArrayToNumber([1, 0, 1, 1]);
