// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: boolean
// e:
// 3 -> 2 -> 7 -> 7 -> 2 -> 3
// 3 -> 2 -> 7 -> 2 -> 3
//
const linkedPalindrome = (head) => {
  let c = head;
  let a = [];
  while (!!c) {
    a.push(c.val);
    c = c.next;
  }

  return a.join("") === a.reverse().join("");
};
