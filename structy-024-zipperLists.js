// https://structy.net/problems/zipper-lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: 2 heads of ll
// r: 1 head of ll

//  a                  b ---------------> c
// h1                 n1
// c1

//  x                  y ---------------> z
// h2                 n2
// c2

// // recursion:
const zipperLists = (head1, head2) => {
  if (!head1 && !head2) return null;

  if (!head1) return head2;
  if (!head2) return head1;

  let next1 = head1.next;
  let next2 = head2.next;

  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  return head1;
};

// // recursion: WRONG
// const zipperLists = (head1, head2) => {
//   if (!head1 && !head2) return null;

//   if (!head1) return head2;
//   if (!head2) return head1;

//   let next1 = head1.next;
//   let next2 = head2.next;

//   head1.next = head2;
//   head2.next = next1;
//   //   console.log(head1, head2);
//   zipperLists(next1, next2);
//   return head1;
// };

// // iteration
// const zipperLists = (head1, head2) => {
//   let current1 = head1;
//   let current2 = head2;
//   let tail = null;

//   while (current1 && current2) {
//     let next1 = current1.next;

//     let next2 = current2.next;
//     current1.next = current2;
//     current1 = current2;
//     current2 = next1;

//   }

//   return head1;
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// // a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// console.log(zipperLists(a, x));
// // a -> x -> b -> y -> c -> z

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z -> d -> e -> f
