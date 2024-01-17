/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// p: array;
// r: array;
// e:
//                                  "eat","tea","tan","ate","nat","bat"
//
//
//

// The time complexity of the provided JavaScript solution for grouping anagrams is O(N * K * log(K)), where N is the number of strings in the input array and K is the maximum length of a string. This is due to the sorting operation (sort()) applied to each string.

// The space complexity is O(N * K), where N is the number of strings in the input array and K is the maximum length of a string. This is because the algorithm uses an object (anagramGroups) to store the grouped anagrams, and in the worst case, each string might be a unique anagram, leading to N entries in the object, each with a string of length K.
var groupAnagrams = function (strs) {
  const map = {};

  for (let str of strs) {
    const s = str.split("").sort().join("");
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }

  const result = [];
  for (let s in map) {
    result.push(map[s]);
  }

  return result;
};
