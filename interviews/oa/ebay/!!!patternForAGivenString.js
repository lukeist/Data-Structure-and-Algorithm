// Can you solve this problem.
// Write a program to return the pattern for a given string like below:
// If string is aaaaa, pattern should be a
// Example:

// 01234
//  ik
// aaaaa -> a
//    j
// pattern: a
// sub: a
// isValid = 1

// ababab -> ab

// 0123456789
// abcababcab -> abcab
//      i
// abcdabcabcdabc -> abcdabc.
//
//
// 0123456
//        i
// abcdefg -> throw Exception / return ""
//        j
// pattern: abcdefg
// sub: abcab
// isValid = 1

// abcdefgabc -> throw Exception / return ""

// p: string
// r: string
// 0123456789
//      i    k
// abcababcab -> abcab
//      j
// pattern: abcab
// sub: abcab
// isValid = 1

const patternForAGivenString = (s) => {
  for (let i = 1; i <= s.length / 2; i++) {
    let patt = s.substring(0, i);
    let isValid = true;

    for (let j = i; j < s.length; j += i) {
      let sub = s.substring(j, j + i);

      if (patt !== sub) {
        isValid = false;
        break;
      }
    }

    if (isValid) return patt;
  }
  return null;
};

console.log(patternForAGivenString("aaaaa"));
console.log(patternForAGivenString("ababab"));
console.log(patternForAGivenString("abcababcab"));
console.log(patternForAGivenString("abcdabcabcdabc"));
console.log(patternForAGivenString("abcdefg"));
console.log(patternForAGivenString("abcdefgaa"));
console.log(patternForAGivenString("aaaaabcaaaaabc"));
