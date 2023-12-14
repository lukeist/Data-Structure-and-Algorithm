/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// p: head of ll, head of ll;
// r: head of ll
// e:
//                  c     c1
//         1    2    4
//         |  / |  /
//         1    3    4
//                   c2
//             c1   n1
//         1    2 -> 4
//         |
//         1   null
//         c     c2

// recursion
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// iteration
// var mergeTwoLists = function(list1, list2) {
//     let head = new ListNode();
//     let c = head;
//     let c1 = list1;
//     let c2 = list2;

//     while (c1 && c2) {
//         let n1 = c1.next;
//         let n2 = c2.next;

//         if (c1.val <= c2.val) {
//             c.next = c1;
//             c = c1;
//             c1 = n1;
//         } else {
//             c.next = c2;
//             c = c2;
//             c2 = n2;
//         }
//     }

//     c.next = c2 ? c2 : c1;
//     return head.next;
// };
