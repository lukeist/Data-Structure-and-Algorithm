// https://structy.net/problems/premium/linked-list-cycle

class Node {
  constructor(val) {
    this = val;
    this.next = null;
  }
}

// p: head of ll
// r: boolean

// // two poninters time O(n) space O(1) 
const linkedListCycle = (head) => {
    let p1 = head;
    let p2 = head;
    let firstInteraction = true

    while (p2 && p2.next) {
      if (p1 === p2 && !firstInteraction) return true;
  
      p1 = p1.next;
      p2 = p2.next.next;

      firstInteraction = false
    }
  
    return false;
  };


// // // two poninters time O(n) space(1)
// const linkedListCycle = (head) => {
//   let p1 = head;
//   let p2 = head.next;

//   while (p2 && p2.next) {
//     if (p1 === p2) return true;

//     p1 = p1.next;
//     p2 = p2.next.next;
//   }

//   return false;
// };

// // time O(n) space O(n)
// const linkedListCycle = (head) => {
//   const visited = new Set();
//   let cur = head;

//   while (cur) {
//     if (visited.has(cur)) return true;
//     visited.add(cur);

//     cur = cur.next;
//   }

//   return false;
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = b; // cycle

// //         _______
// //       /        \
// // a -> b -> c -> d
// true

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
// false
console.log(linkedListCycle(a));
