// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head ll, head ll
// r: head ll

//        a ----> b ----> c ----> null
//        h1     n1       c1      n
//        x ----> y ----> z
//        h2    n2      c2

// // recursion
// const zipperLists = (head1, head2) => {
//     if (!head1 && !head2) return null;
//     if (!head1) return head2;
//     if (!head2) return head1;

//     const n1 = head1.next;
//     const n2 = head2.next;
//     head1.next = head2;
//     head2.next = zipperLists(n1, n2);

//     return head1;
//   }

// iteration O(2 * min(nodes1,nodes2)) O(1)
const zipperLists = (head1, head2) => {
  let c1 = head1;
  let c2 = head2;

  while (c1 && c2) {
    let next = c1.next;

    c1.next = c2;
    c1 = c2;
    c2 = next;
  }

  return head1;
};
