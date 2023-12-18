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

// p: head of ll;
// r: node of ll;
// e: 
//                        s    
//              1 -> 2 -> 3 -> 4 -> 5
//                                  f        
//                             s        
//              1 -> 2 -> 3 -> 4 -> 5 -> 6
//                                          f

var middleNode = function(head) {
  let s = head, f = head;
  while (f && f.next) {
      s = s.next;
      f = f.next.next;
  }
  return s;
};