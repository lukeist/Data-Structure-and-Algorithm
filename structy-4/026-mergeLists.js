class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head ll, head ll
// r: head ll

//
//          c1
// 5    7    25 -> 28
// | /  |
// 6    8 -> 20
//          c        c2

//

// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)
// const mergeLists = (head1, head2) => {
//   const head = new Node();
//   let c = head;
//   let c1 = head1;
//   let c2 = head2;

//   while (!!c1 && !!c2) {
//     if (c1.val < c2.val) {
//       c.next = c1;
//       c = c1;
//       c1 = c1.next;
//     } else {
//       c.next = c2;
//       c = c2;
//       c2 = c2.next;
//     }
//   }

//   if (!c1) c.next = c2;
//   if (!c2) c.next = c1;

//   return head.next;
// };

// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(min(n, m))
const mergeLists = (head1, head2) => {
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.val < head2.val) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2;
  }
};
