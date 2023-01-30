// Let's go through each iteration of the loop with the input 121:

// First iteration:
// x = 121, reversed = 0
// reversed becomes reversed * 10 + x % 10 = 0 * 10 + 121 % 10 = 0 + 1 = 1
// x becomes Math.floor(x / 10) = Math.floor(121 / 10) = 12
// Second iteration:
// x = 12, reversed = 1
// reversed becomes reversed * 10 + x % 10 = 1 * 10 + 12 % 10 = 10 + 2 = 12
// x becomes Math.floor(x / 10) = Math.floor(12 / 10) = 1
// Third iteration:
// x = 1, reversed = 12
// reversed becomes reversed * 10 + x % 10 = 12 * 10 + 1 % 10 = 120 + 1 = 121
// x becomes Math.floor(x / 10) = Math.floor(1 / 10) = 0
// The loop ends as x is now 0.
// The function then returns the comparison of original (which was set to 121 at the beginning of the function) and reversed (which is now 121 after the iterations), which are equal, meaning that 121 is a palindrome and the function returns true.

/**
 * @param {number} x
 * @return {boolean}
 */

// p: int,
// r: boolean
var isPalindrome = function (x) {
  if (x < 0) return false;
  const original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     const s = x.toString();
//     let i = 0, j = s.length - 1;
//     while (i < j) {
//         if (s[i] !== s[j]) return false;
//         i++;
//         j--;
//     }
//     return true;
// };
