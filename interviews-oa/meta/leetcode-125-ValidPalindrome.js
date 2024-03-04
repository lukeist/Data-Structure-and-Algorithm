// https://leetcode.com/discuss/interview-question/4845039/Meta-or-SWE-or-Full-loop-or-USA

// p: string;
// r: boolean;
// e:
//  "A man, a plan, a canal: Panama": true;
//
var isPalindrome = function (s) {
  let newS = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let c of s) {
    if (alpha.includes(c.toLowerCase())) {
      newS += c.toLowerCase();
    }
  }
  let i = 0,
    j = newS.length - 1;

  while (i <= j) {
    if (newS[i] !== newS[j]) return false;
    i++;
    j--;
  }

  return true;
};
