class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll
// r: head of ll
// e:
// 1 -> 2 -> 6
// 4 -> 5 -> 3
// 5 -> 7 -> 9

// 9 -> 8
// 7 -> 4
// 6 -> 3 -> 1

// 9 -> 9 -> 9 -> 9
//      c1
// 1
//      c2
// 0 -> 0 -> 0 -> 0 -> 1
//      c

// recursive O(max(h1, h2)) O(max(h1, h2))
const addLists = (head1, head2, r = 0) => {
  // if (r === 1 && !head1 && !head2) return new Node(r);
  if (r === 0 && !head1 && !head2) return null;

  let v = (head1 ? head1.val : 0) + (head2 ? head2.val : 0) + r;
  v >= 10 ? (v = v % 10) && (r = 1) : (r = 0);

  const head = new Node(v);
  const next1 = !head1 ? null : head1.next;
  const next2 = !head2 ? null : head2.next;
  head.next = addLists(next1, next2, r);

  return head;
};

// // iterative O(max(h1, h2)) O(max(h1, h2))
// const addLists = (head1, head2) => {
//   let c1 = head1;
//   let c2 = head2;
//   let head = new Node(null);
//   let c = head;
//   let v, r = 0;

//   while (c1 || c2) {
//     v = (c1 ? c1.val : 0)
//       + (c2 ? c2.val : 0)
//       + r;

//     v >= 10 ? (v = v % 10) && (r = 1) : (r = 0);

//     let temp = new Node(v);
//     c.next = temp;
//     c = c.next;
//     c1 && (c1 = c1.next);
//     c2 && (c2 = c2.next);
//   }

//   r === 1 && (c.next = new Node(r));

//   return head.next;
// };
