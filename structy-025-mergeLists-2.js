class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//    5    7 -> 10 -> 12 -> 20 -> 28
//    h1|         c1   n1
//    6 -> 8 -> 9 -> 25
//    h2         c2   n2

// recursive O(min(n,m)) O(min(n,m))
const mergeLists = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;

  let n1 = head1.next;
  let n2 = head2.next;

  if (head1.val < head2.val) {
    head1.next = mergeLists(n1, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, n2);
    return head2;
  }
};

// iterative O(min(n,m)) O(1)
// const mergeLists = (head1, head2) => {
//   let c1 = head1;
//   let c2 = head2;
//   let head = new Node(0);
//   let tail = head;

//   while (c1 && c2) {
//     let n1 = c1.next;
//     let n2 = c2.next;

//     if (c1.val < c2.val) {
//       tail.next = c1;
//       tail = c1;
//       c1.next = c2;
//       c1 = n1;
//     } else {
//       tail.next = c2;
//       tail = c2;
//       c2.next = c1;
//       c2 = n2;
//     }
//   }

//   // if (c1) tail.next = c1;
//   // if (c2) tail.next = c2;

//   return head.next;
// };

// // iterative O(min(n,m)) O(1)
// const mergeLists = (head1, head2) => {
//   let c1 = head1;
//   let c2 = head2;
//   let tail = null;
//   let head = new Node(0);
//   tail = head;

//   while (c1 && c2) {
//     let n1 = c1.next;
//     let n2 = c2.next;

//     if (c1.val < c2.val) {
//       tail.next = c1;
//       tail = c1;
//       c1.next = c2;
//       c1 = n1;
//     } else {
//       tail.next = c2;
//       tail = c2;
//       c2.next = c1;
//       c2 = n2;
//     }
//   }

//   // if (c1) tail.next = c1;
//   // if (c2) tail.next = c2;

//   return head.next;
// };
