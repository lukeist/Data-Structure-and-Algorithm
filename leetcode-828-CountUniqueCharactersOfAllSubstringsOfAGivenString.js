// https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/

// p: string
// r: num
// e:

// Example 1:
// Input: s = "ABC"
// Output: 10
// Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
// A AB ABC
// B BC
// C
// Every substring is composed with only unique letters.
// Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

// Example 2:
// Input: s = "ABA" => A B A AB BA ABA
// Output: 8
// Explanation: The same as example 1, except countUniqueChars("ABA") = 1.

// Example 3:
// Input: s = "LEETCODE"
// Output: 92

var uniqueLetterString = function (s) {
  // create substrings from s
  //// split s to array - loop through s

  let arrSubstr = Array.from(Array(s.length), (_, i) => {
    const arrTemp = [];
    for (let j = i + 1; j <= s.length; j++) {
      arrTemp.push(s.substring(i, j));
      //   arrSubstrings.push(subString);
    }
    return arrTemp;
  });
  //   console.log(arrSubstr);

  ///////
  for (let i = 0; i < s.length; i++) {}

  //   arrSubstr = arrSubstr.map((a, i) => a[i]);
  //////////////// 2
  //   const arrSS = Array.from(Array(s.length), (_, i) => {
  //     for (let j = i + 1; j <= s.length; j++) {
  //       arrSubstr.push(s.substring(i, j));
  //       //   arrSubstrings.push(subString);
  //     }
  //     return arrSubstr;
  //   });

  //////////////// 3
  //   const arrSS = s.split("").map((_, i, arrS) =>
  //     //   Array.from(
  //     //     Array(arrS.length - i),
  //     //     (e, i) => arrS[arrS.length - i - 1]
  //     //   )

  //     {
  //       const arrSubstr = [];
  //       for (let j = i + 1; j <= arrS.length; j++) {
  //         arrSubstr.push(s.substring(i, j));
  //         //   arrSubstrings.push(subString);
  //       }
  //       return arrSubstr;
  //     }
  //   );

  const arrTest = s
    .split("")
    .filter((e, i, arr) => e !== arr[i + 1])
    .join("");
  //   .split("");
  console.log(arrTest);

  const arrSubstrings = [];
  for (let i = 0; i < arrTest.length; i++) {
    for (let j = i + 1; j <= arrTest.length; j++) {
      const subString = arrTest.substring(i, j);
      arrSubstrings.push(subString);
    }
  }
  ///////////////////////
  // remove not unique chars
  const countUniqueChars = (str) => {
    const map = {};
    // put all char into map
    for (c of str) {
      map[c] = (map[c] || 0) + 1; // count chars
    }
    // console.log(
    //   str.split("").filter((c) => map[c] === 1)
    //   //
    // );
    // console.log(map);
    return str.split("").filter((c) => map[c] === 1).length;
  };
  ////////////////////////

  // count length of all substrings but not unique
  const sumAll = arrSubstrings.reduce((p, c) => p + countUniqueChars(c), 0);
  console.log(arrSubstrings, sumAll);
  return sumAll;
};

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // working solutoin but O(n^2) time exceeded
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var uniqueLetterString = function (s) {
//   // create substrings from s
//   const arrSubstrings = [];
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const subString = s.substring(i, j);
//       arrSubstrings.push(subString);
//     }
//   }
//   // remove not unique chars
//   const countUniqueChars = (str) => {
//     const map = {};
//     // put all char into map
//     for (c of str) {
//       map[c] = (map[c] || 0) + 1; // count chars
//     }
//     return str.split("").filter((c) => map[c] === 1).length;
//   };
//   return arrSubstrings.reduce((p, c) => p + countUniqueChars(c), 0);
// };

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
uniqueLetterString("LEETCODE");
// uniqueLetterString(
//     "DELQGVWNZKIJJPSXOVWWIZUXCEGWSQLESNSRBMKZARFPAXSVWQEZDENDAHNNIBHGHTFDLPGDLFXMIYRFNLMXHNPIFUAXINXPXLCTTJNLGGMKJIOEWBECNOFQPVCIKIAZMNGHEHFMCPWSMJTMGVSXTOGCGUYKFMNCGLCBRAFJLJVPIVDOLJBURULPGXBVDCEWXXXLTRMSHPKSPFDGNVOCZWDXJUWVNAREDOKTZMIUDKDQWWWSAEUUDBHMWZELOSBIHMAYJEMGZPMDOOGSCKLVHTGMETHUISCLJKDOQEWGVBULEMUXGTRKGXYFDIZTZWMLOFTCANBGUARNWQEQWGMIKMORVQUZANJNRNPMJWYLVHWKDFLDDBBMILAKGFROEQAMEVONUVHOHGPKLBPNYZFPLXNBCIFENCGIMIDCXIIQJWPVVCOCJTSKSHVMQJNLHSQTEZQTTMOXUSKBMUJEJDBJQNXECJGSZUDENJCPTTSREKHPRIISXMWBUGMTOVOTRKQCFSDOTEFPSVQINYLHXYVZTVAMWGPNKIDLOPGAMWSKDXEPLPPTKUHEKBQAWEBMORRZHBLOGIYLTPMUVBPGOOOIEBJEGTKQKOUURHSEJCMWMGHXYIAOGKJXFAMRLGTPNSLERNOHSDFSSFASUJTFHBDMGBQOKZRBRAZEQQVWFRNUNHBGKRFNBETEDJIWCTUBJDPFRRVNZENGRANELPHSDJLKVHWXAXUTMPWHUQPLTLYQAATEFXHZARFAUDLIUDEHEGGNIYICVARQNRJJKQSLXKZZTFPVJMOXADCIGKUXCVMLPFJGVXMMBEKQXFNXNUWOHCSZSEZWZHDCXPGLROYPMUOBDFLQMTTERGSSGVGOURDWDSEXONCKWHDUOVDHDESNINELLCTURJHGCJWVIPNSISHRWTFSFNRAHJAJNNXKKEMESDWGIYIQQRLUUADAXOUEYURQRVZBCSHXXFLYWFHDZKPHAGYOCTYGZNPALAUZSTOU"
//   );
// [
//   "L",
//   "LE",
//   "LEE",
//   "LEET",
//   "LEETC",
//   "LEETCO",
//   "LEETCOD",
//   "LEETCODE",
//   "E",
//   "EE",
//   "EET",
//   "EETC",
//   "EETCO",
//   "EETCOD",
//   "EETCODE",
//   "E",
//   "ET",
//   "ETC",
//   "ETCO",
//   "ETCOD",
//   "ETCODE",
//   "T",
//   "TC",
//   "TCO",
//   "TCOD",
//   "TCODE",
//   "C",
//   "CO",
//   "COD",
//   "CODE",
//   "O",
//   "OD",
//   "ODE",
//   "D",
//   "DE",
//   "E",
// ];
