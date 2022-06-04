// https://leetcode.com/problems/reorder-data-in-log-files/
// p: arr of str
// r: arr

// Example 1:

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
// Example 2:

// Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
// Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

var reorderLogFiles = function (logs) {
  // determine if dig or let, push to respective arr
  //// loop throught logs, use conditionals
  let arrDig = [];
  let arrLet = [];

  for (const log of logs) {
    const firstSpaceIndex = log.indexOf(" ");
    const indexOfSecondWord = firstSpaceIndex + 1;
    const firstCharOfSecondWord = log.charAt(indexOfSecondWord);
    +firstCharOfSecondWord === parseInt(firstCharOfSecondWord)
      ? arrDig.push(log)
      : arrLet.push(log);
  }
  // sort both arrs

  arrLet.sort((a, b) => {
    const aContent = a.slice(a.indexOf(" ") + 1);
    const bContent = b.slice(b.indexOf(" ") + 1);
    return aContent === bContent
      ? a.localeCompare(b)
      : aContent.localeCompare(bContent);
  });

  // concat both arrs back into 1
  return arrLet.concat(arrDig);
};
reorderLogFiles([
  "let4 art can",
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
]);

reorderLogFiles([
  "a1 9 2 3 1",
  "g1 act car",
  "zo4 4 7",
  "ab1 off key dog",
  "a8 act zoo",
]);
