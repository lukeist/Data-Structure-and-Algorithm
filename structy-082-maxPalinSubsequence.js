// https://structy.net/problems/max-palin-subsequence

// alvin's explanation: abdef > abde + bdef
// why not: abde abdf abef abef adef bdef??????

// p: str
// r: num+
const maxPalinSubsequence = (str, memo = {}) => {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  //   if (str.length === 2 && str[0] === str[1]) {
  //     return 2;
  //   } else if (str.length === 2) {
  //     return -Infinity;
  //   }

  // a b c d e f g
  // 0 1 2 3 4 5 6
  //   i       7-i-1
  if (str.length in memo) return memo[str];
  let max = -Infinity;
  let count = 0;

  for (
    let i = 0, j = str.length - 1;
    i < str.length / 2, j > str.length / 2;
    i++, j--
  ) {
    if (str[i] === str[j]) {
      str = str.slice(0, i) + str.slice(i + 1, j) + str.slice(j + 1);

      count = (count + 1) * 2;

      i = 0;
      j = str.length - 1;
    }
  }

  max = count + Math.max(max, isPalindrome(str));

  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    max = Math.max(max, maxPalinSubsequence(newStr, memo));
  }

  memo[str] = max;
  return max;
};

const isPalindrome = (str) => {
  // option 1
  //   const checkPali = str === str.split("").reverse().join("");

  // option 2
  let strReversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReversed = strReversed + str[i];
  }
  const checkPali = str === strReversed;

  // return
  if (checkPali) return str.length;
  return -Infinity;
};

console.log(maxPalinSubsequence("luwxult")); // -> 5
console.log(maxPalinSubsequence("xyzaxxzy")); // -> 6
console.log(maxPalinSubsequence("lol")); // -> 3
console.log(maxPalinSubsequence("boabcdefop")); // -> 3
// console.log(maxPalinSubsequence("chartreusepugvicefree")); // -> 7

//   luwul
// case 1: 6
// case 2: 6x5
// case 3: 4
// case 4: 3
// case

//                                luwxult
//           /       /     /      /       \         \        \
//     uwxult  lwxult luxult  luwult      luwxlt   luwxut    luwxul
//     ///\\\  ///\\\ ///\\\  ///\\\      ///\\\   ///\\\    ///\\\
