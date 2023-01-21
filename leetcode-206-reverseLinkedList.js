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

// p: head of ll
// r: head of ll
// e:
//         p    c    n
// null <- 1 <- 2 <- 3    null
//
//         p    c    n
// null    1

var reverseList = function (head, p = null) {
  if (!head) return p;
  const n = head.next;
  head.next = p;
  return reverseList(n, head);
};

// var reverseList = function(head) {
//     let p = null, c = head;
//     while (c) {
//         let n = c.next;
//         c.next = p;
//         p = c;
//         c = n;
//     }
//     return p;
// };
