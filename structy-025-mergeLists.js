// https://structy.net/problems/premium/merge-lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: 2 heads of ll
// r: 1 head of ll

// Alvin's recursion
const mergeLists = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.val < head2.val) {
    const n1 = head1.next;
    head1.next = mergeLists(n1, head2);
    return head1;
  } else {
    const n2 = head2.next;
    head2.next = mergeLists(head1, n2);
    return head2;
  }
};

// // Alvin's iteration
// const mergeLists = (head1, head2) => {
//   let head = new Node(null);

//   let t = head;
//   let c1 = head1;
//   let c2 = head2;

//   while (c1 && c2) {
//     if (c1.val < c2.val) {
//       t.next = c1;
//       c1 = c1.next;
//     } else {
//       t.next = c2;
//       c2 = c2.next;
//     }
//     t = t.next;
//   }

//   c1 && (t.next = c1);
//   c2 && (t.next = c2);

//   return head.next;
// };

// // recursion WRONG
// const mergeLists = (head1, head2) => {
//   if (!head1) return head2;
//   if (!head2) return head1;

//   let n1 = head1.next;
//   let n2 = head2.next;

//   head1.val < head2.val
//     ? (head1 = mergeLists(head1.next, head2.next))
//     : (head2 = mergeLists(head2.next, head1.next));

//   return   head1.val < head2.val ? head1 : head2
// };

// iteration
// const mergeLists = (head1, head2) => {
//   let head = head1.val < head2.val ? head1 : head2;
//   let c1 = head1;
//   let c2 = head2;

//   if (head1.val < head2.val) {
//     head = head1;
//     c1 = head1.next;
//   } else {
//     head = head2;
//     c2 = head2.next;
//   }
//   let c = head;

//   while (c1 && c2) {
//     let n1 = c1.next;
//     let n2 = c2.next;

//     if (c1.val < c2.val) {
//       c.next = c1;
//       c = c1;
//       c1 = n1;
//     } else {
//       c.next = c2;
//       c = c2;
//       c2 = n2;
//     }
//   }

//   !c1 && (c.next = c2);
//   !c2 && (c.next = c1);

//   return head;
// };

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
