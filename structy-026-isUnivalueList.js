// https://structy.net/problems/premium/is-univalue-list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll
// boolean

// recursion
const isUnivalueList = (head, unique = head.val) => {
  if (!head) return true;
  if (head.val !== unique.val) return false;

  return isUnivalueList(head.next, unique);
};

// // iteration
// const isUnivalueList = (head) => {
//   const unique = head.val;
//   let current = head.next;

//   while (current) {
//     if (current.val !== unique) return false;

//     current = current.next;
//   }
//   return true;
// };

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

console.log(isUnivalueList(a)); // false
