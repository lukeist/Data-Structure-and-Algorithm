// Give a list of string, where every string in the list is of size 5.
// Return the list of 5 string such that
// all the characters in each of the strings are unique

// i.e if we combine all the strings(not nnecessary)
// we will have 25 unique characters)
// eg
// Input explanation
// List of string with length of 5 each

// const input = [
//   "abcde",
//   "fghij",
//   "klmno",
//   "pqrst",
//   "uvwxy",
//   "zabcd",
//   "apple",
//   "zebra",
//   "ocean",
//   "quick",
//   "world",
//   "jumps",
//   "foxes",
//   "liver",
// ];
// intput = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "zabcd"]

//
// p: array of strings;
// r: array of 5 strings
//
// intput = ["zabcd", "apple", "zebra", "ocean", "quick", "world", "jumps", "foxes", "liver", "abcde", "fghij", "klmno", "pqrst", "uvwxy"]
// []
//
// function getUniqueStrings(strs) {}
// intput = ["zabcd", "apple", "zebra", "ocean", "quick", "world", "jumps", "foxes", "liver", "abcde", "fghij", "klmno", "pqrst", "uvwxy"]
//
//                                     [a,1,c,2,e,3]
//                                          /  \
//                                      []       [a]
//                                  /    \     /    \
//                                []    [1]   [a]    [a1]
//                             /    \  /  \  /  \    /  \
//                           []    [c]...
//
// intput = ["zabcd", "apple", "zebra", "ocean", "quick", "world", "jumps", "foxes", "liver", "abcde", "fghij", "klmno", "pqrst", "uvwxy"]
function getUniqueStrings(strs, i = 0, count = 0, chars = new Set()) {
  if (count === 5) return [];
  if (i === strs.length) return null;

  const excludeS = getUniqueStrings(strs, i + 1, count, chars);
  if (excludeS !== null) return excludeS;

  const s = strs[i];

  if (checkSInChars(s, chars)) {
    for (let c of s) chars.add(c);
    const includeS = getUniqueStrings(strs, i + 1, count + 1, chars);
    if (includeS !== null) {
      includeS.push(s);
      return includeS;
    }
    for (let c of s) chars.delete(c);
  }

  return null;
}

const checkSInChars = (s, chars) => {
  for (let c of s) {
    if (chars.has(c)) return false;
  }
  return true;
};

//
//
//
//
//
//
//
//
// RIGHT SOLUTION:
//
// function getUniqueStrings(strs) {
//   return dfs(0, 0, strs, new Set());
// }

// function dfs(i, count, strs, charsUsed) {
//   if (count === 5) return [];
//   if (i === strs.length) return null;

//   let excludeS = dfs(i + 1, count, strs, charsUsed);
//   if (excludeS !== null) return excludeS;

//   const s = strs[i];
//   if (canAdd(s, charsUsed)) {
//     for (let c of s) charsUsed.add(c);

//     const includeS = dfs(i + 1, count + 1, strs, charsUsed);
//     if (includeS !== null) {
//       includeS.push(s);
//       return includeS;
//     }

//     for (let c of s) charsUsed.delete(c);
//   }

//   return null;
// }

// function canAdd(s, charsUsed) {
//   for (let c of s) {
//     if (charsUsed.has(c)) return false;
//   }
//   return true;
// }

// const input = [
//   "abcdf",
//   "abcde",
//   "abcdh",
//   "abcdg",
//   "eghij",
//   "klmno",
//   "pqrst",
//   "uvwxy",
//   "zabcd",
//   "apple",
//   "zebra",
//   "ocean",
//   "quick",
//   "world",
//   "jumps",
//   "foxes",
//   "liver",
// ];

const input = [
  "abcde",
  "zabcd",
  "apple",
  "zebra",
  "ocean",
  "quick",
  "world",
  "jumps",
  "foxes",
  "liver",
  "fghij",
  "klmno",
  "pqrst",
  "uvwxy",
];

console.log(getUniqueStrings(input));
