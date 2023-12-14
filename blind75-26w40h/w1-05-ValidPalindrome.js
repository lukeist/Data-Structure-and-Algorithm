/**
 * @param {string} s
 * @return {boolean}
 */

// p: string;
// r: boolean;
// e: "amanaplanacanalpanama"

var isPalindrome = function (s) {
  const alpha = "0123456789abcdefghijklmnopqrstuvwxyz";
  let newS = "";

  for (let c of s) {
    const newC = c.toLowerCase();
    if (alpha.indexOf(newC) >= 0) newS += newC;
  }
  let i = 0,
    j = newS.length - 1;
  while (i < j) {
    if (newS[i] !== newS[j]) return false;
    i++;
    j--;
  }
  return true;
};
