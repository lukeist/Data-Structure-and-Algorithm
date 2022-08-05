// https://structy.net/problems/max-palin-subsequence

// p: str
// r: num+
const maxPalinSubsequence = (str) => {
  // todo
  let max = -Infinity;

  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = i + 1; j < str.length; j++) {
  //       const newStr = str.slice(0, i) + str.slice(j);
  //       //   console.log(newStr, isPalindrome(newStr));
  //       max = Math.max(isPalindrome(newStr), max);
  //     }
  //   }

  return max;
};

const isPalindrome = (str) => {
  //   console.log(str, str.split("").reverse().join(""));

  const checkPali = str === str.split("").reverse().join("");
  if (checkPali) return str.length;

  return -Infinity;
};

console.log(maxPalinSubsequence("luwxult")); // -> 5
//   luwul
