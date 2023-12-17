// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays

// p: 2 arr of strings
// r: arr of ints / not print
// e:

function matchingStrings(strings, queries) {
  // 2 loops not good ?
  const result = [];

  for (value of queries) {
    result.push(strings.filter((v) => v === value).length);
  }
  console.log(result);
  return result;
}

const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];
matchingStrings(strings, queries);
