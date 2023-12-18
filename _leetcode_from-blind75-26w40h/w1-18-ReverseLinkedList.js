/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// p: head ll;
// r: head ll;
// e:
//                               t
//                                    c
//
//   null <- 1    2 -> 3 -> 4 -> 5

// recursion
var reverseList = function (head, tail = null) {
  if (!head) return tail;
  const next = head.next;
  head.next = tail;

  return reverseList(next, head);
};

// // iteration
// var reverseList = function(head) {
//     let t = null;
//     let c = head;
//     while (c) {
//         let n = c.next;
//         c.next = t;
//         t = c;
//         c = n;
//     }
//     return t;
// };
