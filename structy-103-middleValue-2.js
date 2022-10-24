// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: val (num/str)

// recursive O(n) O(n)
const middleValue = (head) => {
  const s = getStr(head);
  return s[Math.floor(s.length / 2)];
};

const getStr = (head) => {
  if (!head) return "";
  return head.val + getStr(head.next);
};

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
