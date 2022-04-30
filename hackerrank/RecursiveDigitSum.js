// We define super digit of an integer  using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If  has only  digit, then its super digit is .
// Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .
// For example, the super digit of  will be calculated as:

// 	super_digit(9875)   	9+8+7+5 = 29
// 	super_digit(29) 	2 + 9 = 11
// 	super_digit(11)		1 + 1 = 2
// 	super_digit(2)		= 2
// Example

// The number  is created by concatenating the string   times so the initial .

//     superDigit(p) = superDigit(9875987598759875)
//                   9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
//     superDigit(p) = superDigit(116)
//                   1+1+6 = 8
//     superDigit(p) = superDigit(8)
// All of the digits of  sum to . The digits of  sum to .  is only one digit, so it is the super digit.

// Function Description

// Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

// superDigit has the following parameter(s):

// string n: a string representation of an integer
// int k: the times to concatenate  to make
// Returns

// int: the super digit of  repeated  times
// Input Format

// The first line contains two space separated integers,  and .

// Constraints

function superDigit(n, k) {
  // Write your code here

  const reduceP = (p, k) =>
    (p.reduce((a, c) => +a + +c) * k).toString().split("");

  let p = reduceP(n.split(""), k);

  while (p.length > 1) {
    console.log(p);
    p = reduceP(p, 1);
    console.log(+p[0]);
  }
  return +p[0];
}

superDigit("9875", 4);
// superDigit("123", 3);

// old
// Write your code here
// let p = n.repeat(k);

// const numToArr = (num) =>
//   num
//     .toString()
//     .split("")
//     .map((num) => +num);
// p = numToArr(p);

// while (p.length > 1) {
//   p = p.reduce((a, c) => a + c);
//   p = numToArr(p);
// }
// console.log(p[0]);
// return p[0];
// }
