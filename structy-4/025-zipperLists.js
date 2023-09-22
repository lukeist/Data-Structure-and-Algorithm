// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll, head of ll;
// r: head of ll;
// e:
//                c1  n1
//      a    b   c
//      | /  | /
//      x   y
//               c2   n2
// 1
///////////////////////////////////////////////// BEST solutions:
// const zipperLists = (head1, head2) => {
//   let c1 = head1, c2 = head2, count = 1;

//   while (!!c1 && !!c2) {
//     if (count % 2 !== 0) {
//       let n1 = c1.next;
//       c1.next = c2;
//       c1 = n1;
//     } else {
//       let n2 = c2.next;
//       c2.next = c1;
//       c2 = n2;
//     }
//     count++;
//   }
//   return head1;
// };

const zipperLists = (head1, head2) => {
  if (!head1) return head2;
  if (!head2) return head1;

  head1.next = zipperLists(head2, head1.next);
  return head1;
};

///////////////////////////////////////////////// ok solutions:
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head ll, head ll;
// r: head ll;
// e:
//
//           t1   c1   n1
// a    b    c
// | /  |  /
//      t2   c2   n2
// x    y    z
//
// a -> x -> b -> y -> c -> z

// iterative O(n) O(1)
// const zipperLists = (head1, head2) => {
//   if (!head1) return head2;
//   if (!head2) return head1;

//   let c1 = head1;
//   let c2 = head2;
//   let t1 = null;
//   let t2 = null;

//   let count =  1;

//   while (!!c1 && !!c2) {
//     if (!!(count % 2)) {
//       let n1 = c1.next;
//       t1 = c1;
//       c1.next = c2;
//       c1 = n1;
//     } else {
//       let n2 = c2.next;
//       t2 = c2;
//       c2.next = c1;
//       c2 = n2;
//     }

//     count++;
//   }

//   c1 && (t2.next = c1);
//   c2 && (t1.next = c2);

//   return head1;
// };

// const zipperLists = (head1, head2) => {
//   if (!head1) return head2;
//   if (!head2) return head1;

//   let count = 1;

//   if (!!(count % 2)) {
//     head1.next = zipperLists(head2, head1.next);
//   } else {
//     head2.next = zipperLists(head1, head2.next);
//   }

//   count++;
//   return head1;
// }

// const zipperLists = (head1, head2) => {
//   if (!head1) return head2;
//   if (!head2) return head1;
//   let n1 = head1.next;
//   let n2 = head2.next;

//   head1.next = head2;
//   head2.next = zipperLists(n1, n2);

//   return head1;
// };
