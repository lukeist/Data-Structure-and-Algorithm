// https://structy.net/problems/premium/remove-node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll, val(str/num)
// r: new head

// a ----> b ----> c
//

//recursion BETTER
const removeNode = (head, targetVal) => {
  if (!head) return null;
  if (head.val === targetVal) return head.next;

  head.next = removeNode(head.next, targetVal);

  return head;
};

// // recursion
// const removeNode = (head, targetVal, prev = null, current = head) => {
//     if (head.val === targetVal) return head.next;

//     if (current.val === targetVal) {
//       current = current.next;
//       prev.next = current;
//       return head;
//     }

//     return removeNode(head, targetVal, current, current.next);
//   };
// iteration
// const removeNode = (head, targetVal) => {
//   if (head.val === targetVal) return head.next;

//   let current = head;
//   let prev = null;

//   while (current.val !== targetVal) {
//     prev = current;
//     current = current.next;
//   }

//   prev.next = current.next;
//   current.next = null;
//   return head;
// };

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

removeNode(a, "c");
// a -> b -> d -> e -> f
