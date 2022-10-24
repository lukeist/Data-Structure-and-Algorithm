// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//         _______
//       /        \
// a -> b -> c -> d

// p: head of ll
// r: boolean
// 2 pointers O(n) O(1)
const linkedListCycle = (head) => {
  let slow = head;
  let fast = head;
  let firstMeet = true;

  while (fast && fast.next) {
    if (slow.val === fast.val && !firstMeet) return true;

    slow = slow.next;
    fast = fast.next.next;
    firstMeet = false;
  }

  return false;
};

// // 2 pointers O(n) O(1)
// const linkedListCycle = (head) => {
//   if (!head || !head.next) return false;
//   let slow = head;
//   let fast = head.next;

//   while (slow && fast) {
//     if (slow.val === fast.val) return true;

//     slow = slow.next;
//     if (!fast.next) {return false;}
//     else fast = fast.next.next;
//   }

//   return false;
// }

// recursive O(n) O(n)
const linkedListCycle = (head, visited = new Set()) => {
  if (!head) return false;
  if (visited.has(head.val)) return true;
  visited.add(head.val);

  if (linkedListCycle(head.next, visited)) return true;

  return false;
};

// // iterative O(n) O(n)
// const linkedListCycle = (head) => {
//   let current = head;
//   let visited = new Set();

//   while (current) {
//     if (visited.has(current.val)) return true;
//     visited.add(current.val);

//     current = current.next;
//   }

//   return false;
// };
