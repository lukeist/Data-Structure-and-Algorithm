// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// p: head of ll
// r: boolean;
// e: 

//      c
// 7 -> 7 -> 4

// const isUnivalueList = (head) => {
//   if (!head) return false;
//   if (!head.next) return true;
//   let val = head.val;
//   let c = head.next;
  
//   while (!!c) {
//     if (c.val !== val) return false;
//     c = c.next;
//   }
  
//   return true;
// };


const isUnivalueList = (head, val = head.val) => {
    if (!head) return true;
    if (head.val !== val) return false;
    return isUnivalueList(head.next, val);
  };
    