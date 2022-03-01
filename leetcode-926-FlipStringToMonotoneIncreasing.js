// https://leetcode.com/problems/flip-string-to-monotone-increasing/

// p: str of binary
// r: int +
// e:
// Example 1:
// Input: s = "00110"
// Output: 1
// Explanation: We flip the last digit to get 00111.
// Example 2:

// Input: s = "010110"
// Output: 2
// Explanation: We flip to get 011111, or alternatively 000111.
// Example 3:

// Input: s = "00011000"
// Output: 2
// Explanation: We flip to get 00000000.

var minFlipsMonoIncr = function (s) {
  let countOne = 0; // Keep track of all '1' by counting them
  let countFlip = 0; // Keep track of all '0' to s[i] in the loop
  // then compare them with countOne to decide if flip '1' or '0' is better
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "1") {
      ++countOne;
    } else {
      ++countFlip;
      countFlip = Math.min(countOne, countFlip); // comparing and choosing the min
    }
  }

  return countFlip;
};

// 00011000
// 00012222
// 00000123
// 00000122

// var minFlipsMonoIncr = function (s) {
//   const countMap = {};

//   for (let i = 0; i < s.length; ++i) {
//     if (s[i] === "1") {
//       countMap[1] = (countMap[1] || 0) + 1;
//     } else {
//       countMap[0] = (countMap[0] || 0) + 1;
//       console.log(countMap);

//       countMap[0] = Math.min(countMap[0], countMap[1]);
//     }
//     console.log(countMap, "---------");
//   }
//   console.log(countMap[0]);
// };
// minFlipsMonoIncr("00011000");
// minFlipsMonoIncr("010110");
// minFlipsMonoIncr("010000000000110"); // ===>  0 0 000000000011 1
minFlipsMonoIncr("01111111110011");

// ////
// var minFlipsMonoIncr = function (s) {
//   // flip all to 0 ^ count
//   let count0 = 0;
//   let countFlip0 = 0;
//   let countFlip1 = 0;
//   s.split("").map((c) => {
//     if (c === "1") {
//       ++count0;
//       return "0";
//     } else {
//       return c;
//     }
//   });

//   // 1
//   // check if it is 00111 already return 0

//   // 2
//   // slice new string from the first index of 1 to the last index of 0
//   // compare how many 0s and 1s here

//   let firstIndexOf1 = s.indexOf("1");
//   let lastIndexOf0 = s.lastIndexOf("0");

//   s.split("")
//     .splice(firstIndexOf1, lastIndexOf0)
//     .map((c) => {
//       if (c === "0") {
//         ++countFlip0;
//         return "1";
//       } else {
//         return c;
//       }
//     });

//   //   while (lastIndexOf0 > firstIndexOf1) {
//   //     ++countFlip0;
//   //     let sFlip0 = s.slice(0, lastIndexOf0) + "1" + s.slice(lastIndexOf0 + 1);
//   //     lastIndexOf0 = sFlip0.lastIndexOf("0");
//   //     console.log(sFlip0);
//   //   }

//   console.log(s, count0, countFlip0);
// };
