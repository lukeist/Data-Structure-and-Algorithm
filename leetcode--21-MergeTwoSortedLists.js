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

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode();
  let tail = newList;

  // 2 ------ 3

  // 1 ------ 4

  // nL ------->  1 --------> 2 --------> 3 --------> 4
  // 0            T   t.n    T

  while (l1 && l2) {
    if (l1.val > l2.val) {
      tail.next = l2;
      tail = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      tail = l1;
      l1 = l1.next;
    }
  }

  !l1 && (tail.next = l2);
  !l2 && (tail.next = l1);

  console.log(l1, l2);
  // console.log(tail);
  // console.log(newList);
  console.log(newList.next.next.next.next);

  return newList;
};

// l
// 1 1
// l1  1-  2   4
// l2  1   3   4

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(4);
a.next = b;
b.next = c;

const d = new ListNode(1);
const e = new ListNode(3);
const f = new ListNode(4);
d.next = e;
e.next = f;

mergeTwoLists(a, d);

// var mergeTwoLists = function (l1, l2) {
//   let newList = new ListNode();
//   let prev = newList;
//   let count = 0;
//   while (l1 && l2) {
//     count++;
//     console.log(newList);

//     if (l1.val > l2.val) {
//       prev.next = l2;
//       prev = l2;
//       // console.log(prev);

//       l2 = l2.next;
//     } else {
//       prev.next = l1;
//       prev = l1;

//       l1 = l1.next;
//     }
//     console.log(newList);
//     console.log("-------------------------");

//     // console.log(count, prev);
//   }

//   // console.log(newList);
// };
