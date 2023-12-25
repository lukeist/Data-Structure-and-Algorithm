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
// r: ll;
// e:
//          c1
//                                o
//            /-------\
//           1    2    3 -> 4  -> 4
//                 \-------/
//                           e
//
//

var oddEvenList = function (head) {
  if (!head) return head;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (odd.next && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};

// e:
//           1    2    1    2    1    2    1    2
//          c1
//                     c1
//            /-------\
//           2    1    3 -> 5 -> 6 -> 4 -> 7 -> 8
//                 \-------/
//               c2
//
//
// var oddEvenList = function(head) {
//     if (!head) return head;
//     let c1 = head;
//     let h2 = head.next;
//     let c2 = head.next;

//     while ((c1 && c1.next) || (c2 && c2.next)) {
//         if (c1 && c1.next) {
//             let n1 = c1.next.next;
//             c1.next = c1.next.next;
//             c1.next && (c1 = n1);
//         }
//         if (c2 && c2.next) {
//             let n2 = c2.next.next;
//             c2.next = c2.next.next;
//             c2.next && (c2 = n2);
//         }
//     }
//     c1.next = h2;
//     return head;
// };
