// https://structy.net/problems/premium/middle-value

// p: head of ll
// r: val (num/str)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// a ----> b ----> c ----> d ----> e ----> null
//                 c1
//                                c2

// a ----> b ----> c ----> d ----> e ----> f ----> null
//                 c1
//                                c2

// two pointers: time O(n) space O(1) BETTER
const middleValue = (head) => {
  let c1 = head;
  let c2 = head;

  while (!(!c2 || !c2.next)) {
    c1 = c1.next;
    c2 = c2.next.next;
  }

  return c1.val;
};

// if (!a || !b) do something
//// a === false | b === true > do s/
//// a === true | b === false > do s/
//// a === false | b === false > do s/

// if (!(!a || !b)) do something
//// a === false | b === true > do s/

// // two pointers: time O(n) space O(1)
// const middleValue = (head) => {
//   let c1 = head;
//   let c2 = head;

//   while (c2) {
//     if (!c2.next) return c1.val;

//     c1 = c1.next;
//     c2 = c2.next.next;
//   }

//   return c1.next.val;
// };
// time O(n) space O(n)
// const middleValue = (head) => {
//   let cur = head;
//   const vals = [];
//   while (cur) {
//     vals.push(cur.val);
//     cur = cur.next;
//   }

//   const len = vals.length;
//   return len % 2 === 0 ? vals[len / 2] : vals[len / 2 - 0.5];
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(middleValue(a));

const f = new Node("f");
e.next = f;

console.log(middleValue(a));
