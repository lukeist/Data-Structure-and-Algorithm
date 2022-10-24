// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: boolean

// recursive O(n) O(n)
const linkedPalindrome = (head) => {
  const str = getStr(head);
  return str === str.split("").reverse().join("");
};

const getStr = (head) => {
  if (!head) return "";
  return head.val + getStr(head.next);
};

// // iterative O(n) O(n)
// const linkedPalindrome = (head) => {
//   let current = head;
//   let str = '';

//   while (current) {
//     str += current.val;

//     current = current.next;
//   }

//   return str === str.split('').reverse().join('');
// };
