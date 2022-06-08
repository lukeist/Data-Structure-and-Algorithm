// https://leetcode.com/problems/valid-palindrome/

// p: string
// r boolean
// e:
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Runtime: 89 ms, faster than 66.51% of JavaScript online submissions for Valid Palindrome.
var isPalindrome = function (s) {
  if (s === " ") return true;

  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

  // convert to lowercase and remove non-alphanumeric chars
  let arrS = s
    .toLowerCase()
    .split("")
    .filter((c) => alpha.includes(c));

  for (let i = 0, j = arrS.length - 1; i <= j; i++, j--) {
    // console.log(arrS[i], arrS[j]);
    if (arrS[i] !== arrS[j]) return false;
  }
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome("0P");

// // Runtime: 97 ms, faster than 55.15% of JavaScript online submissions for Valid Palindrome.
// var isPalindrome = function (s) {
//     if (s === " ") return true;

//     const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

//     // convert to lowercase and remove non-alphanumeric chars
//     let arrS = s
//       .toLowerCase()
//       .split("")
//       .filter((c) => alpha.includes(c));

//     for (let i = 0; i < arrS.length; i++) {
//       let j = arrS.length - 1 - i;
//       // console.log(arrS[i], arrS[j]);
//       if (arrS[i] !== arrS[j]) return false;
//     }
//     return true;
//   };

// ////////////////////////////////////// passed but Runtime: 140 ms, faster than 14.41% of JavaScript online submissions for Valid Palindrome.
// var isPalindrome = function (s) {
//     if (s === " ") return true;

//     const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

//     // convert to lowercase and remove non-alphanumeric chars
//     let arrS = s
//       .toLowerCase()
//       .split("")
//       .filter((c) => alpha.includes(c));

//     // split to array, reverse array, join back and compare
//     let arrSToString = arrS.join("");
//     let arrSReversedToString = arrS.reverse().join("");

//     console.log(arrSToString === arrSReversedToString);
//     console.log(arrSToString);
//     console.log(arrSReversedToString);
//     return arrSToString === arrSReversedToString;
//   };
