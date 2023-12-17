// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// p: strings
// r: boolean/ not print cl
// e: "foefet" is an anagram of "toffee"

var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};
