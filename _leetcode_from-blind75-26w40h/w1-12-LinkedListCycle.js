/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// p: head
// r: boolean
// e: 
//                 f
//                 s
// 3 -> 2 -> 0 -> -4
//           f 
// s 
// 3
// f 
// 
// f
// s
// 3 -> 2
// f

var hasCycle = function(head) {
  if (!head) return false;
  let s = head, f = head;

  while (f.next && f.next.next) {
      s = s.next;
      f = f.next.next;
      if (s === f) return true;
  }

  return false;
};