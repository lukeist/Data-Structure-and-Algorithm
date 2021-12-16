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

// l1  1   2   4
// l2  1   3   4

var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode();
  let dummy = new ListNode();

  l1.val > l2.val ? (dummy = l2) : (dummy = l1);
  newList = dummy;
  console.log(dummy, newList);

  while (dummy) {
    dummy = l1.next;
    dummy = l2.next;
  }
};

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
