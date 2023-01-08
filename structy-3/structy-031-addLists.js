class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head ll, head ll
// r: head ll

//              c1
//    1 -> 2 -> 6
//              c2
//  + 4 -> 5 -> 3

//    1 -> 2 -> 9
//
// +  4 -> 5 -> 3
//                    c1
// t = 1
//      9 -> 9 -> 9
// n -> 0         0
//                c
//      1
//           c2

// const addLists = (head1, head2, ten = 0) => {
//   if (!head1 && !head2 && ten === 0) return null;
//   // if (!head1 && !head2 && ten === 1) return new Node(1);

//   const val = (!head1 ? 0 : head1.val) + (!head2 ? 0 : head2.val) + ten;
//   const next1 = head1 ? head1.next : null;
//   const next2 = head2 ? head2.next : null;

//   if (val > 9) {
//     const head = new Node(val - 10);
//     head.next = addLists(next1, next2, 1);
//     return head;
//   } else {
//     const head = new Node(val);
//     head.next = addLists(next1, next2, 0);
//     return head;
//   }
// };

const addLists = (head1, head2) => {
  let head = new Node(null);
  let c1 = head1,
    c2 = head2,
    c = head;
  let ten = 0;

  while (c1 || c2 || ten) {
    const val = (!c1 ? 0 : c1.val) + (!c2 ? 0 : c2.val) + ten;

    if (val > 9) {
      c.next = new Node(val - 10);
      ten = 1;
    } else {
      c.next = new Node(val);
      ten = 0;
    }

    c = c.next;
    c1 && (c1 = c1.next);
    c2 && (c2 = c2.next);
  }

  // ten && (c.next = new Node(ten))
  return head.next;
};

module.exports = {
  addLists,
};
