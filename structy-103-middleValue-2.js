// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: val (num/str)

// 2 pointers O(n) O(1):
// 2pointer o(n) O(1)
const middleValue = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

// // recursive O(n) O(n)
// const middleValue = (head) => {
//   const s = getStr(head);
//   return s[Math.floor(s.length / 2)];
// };

// const getStr = (head) => {
//   if (!head) return "";
//   return head.val + getStr(head.next);
// };

// // iterative O(n) O(n)
// const middleValue = (head) => {
//   let current = head;
//   let str = '';

//   while (current) {
//     str += current.val;
//     current = current.next;
//   }

//   return str[Math.floor(str.length/2)];
// };
