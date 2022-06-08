// https://leetcode.com/problems/merge-two-sorted-lists/

// p: 2 arrays
// r: 1 array
// e:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
  console.log([...list1, ...list2].sort((a, b) => a - b));

  return [...list1, ...list2].sort((a, b) => a - b);
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
mergeTwoLists([], []);
mergeTwoLists([], [0]);
