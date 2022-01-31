// https://leetcode.com/problems/concatenated-words/

// p: array
// r: array
// e:
// Example 1:

// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

// Example 2:

// Input: words = ["cat","dog","catdog"]
// Output: ["catdog"]

var findAllConcatenatedWordsInADict = function (words) {
  //   let map = {};
  const result = [];
  for (let i = 0; i < words.length; ++i) {
    let wordsClone = [...words];
    wordsClone.splice(i, 1);
    const arrTemp = [];
    let wordTemp = words[i];
    for (let j = 0; j < wordsClone.length; ++j) {
      wordTemp.includes(wordsClone[j]) && arrTemp.push(wordsClone[j]);
    }
    if (arrTemp.length > 1) {
      result.push(words[i]);
    }
    // (map[words[i]] = arrTemp);
    console.log(arrTemp);
  }
  console.log(result);
  return result;
};

// findAllConcatenatedWordsInADict(["cat", "dog", "catdog"]);
findAllConcatenatedWordsInADict([
  "cat",
  "cats",
  "catsdogcats",
  "dog",
  "dogs",
  "dogcatsdog",
  "hippopotamuses",
  "rat",
  "ratcatdogcat",
  "catsdogcatsmouse",
]);
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

// findAllConcatenatedWordsInADict(["a", "b", "ab", "abc"]);
