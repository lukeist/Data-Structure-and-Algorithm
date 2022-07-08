// https://structy.net/problems/linked-list-values

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll
// r: arr of all nodes
// e: linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

// recursion
const linkedListValues = (head, arr = []) => {
  if (!head) return [];

  arr.push(head.val);
  linkedListValues(head.next, arr);

  return arr;
};

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(linkedListValues(a));

// iteration
// const linkedListValues = (head) => {
//     const result = [];
//     let current = head;

//     while (current !== null) {
//       result.push(current.val);
//       current = current.next;
//     }

//     return result;
//   };
