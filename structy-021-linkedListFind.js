// https://structy.net/problems/linked-list-find

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head ll, num/str
// r: boolean

// dfs recursion: time O(n) because of nodes- space O(n) because of call stacks
const linkedListFind = (head, target) => {
  if (!head) return false;

  if (head.val === target) return true;

  return linkedListFind(head.next, target);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true

// // bfs time O(n) because of nodes- space O(1) because of constant numbers of nodes
// const linkedListFind = (head, target) => {
//     const queue = [head];

//     while (queue.length > 0) {
//       let current = queue.shift();

//       if (current.val === target) return true;
//       current.next && queue.push(current.next);
//     }

//     return false;
//   };
