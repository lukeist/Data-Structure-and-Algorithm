/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// p: head ll
// r: boolean;
// e:
//                     t    s
//      1 -> 2 -> 2 -> 1
//                |        f
//             t  null
//
//                     c    s    n
//      1 -> 2 -> 2 <- 1
//                |        f
//                null
//                s
//      1 -> 2 -> 2 -> 1 -> 1
//                          f

var isPalindrome = function (head) {
  let s = head,
    f = head;

  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }

  let c2 = null;
  while (s) {
    const n = s.next;
    s.next = c2;
    c2 = s;
    s = n;
  }

  let c1 = head;
  while (c2) {
    if (c1.val !== c2.val) return false;
    c1 = c1.next;
    c2 = c2.next;
  }
  return true;
};
