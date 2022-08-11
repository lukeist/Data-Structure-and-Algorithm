// p: head of ll
// r: boolean
// e:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// // // recursion NOT WORKING
// // const linkedPalindrome = (head) => {
// //     if (!head) return true;

// // }

// const explore = (head, vals) => {
//   if (!head) return "";

//   vals.push(head.val);
//   explore;

//   return vals;
// };
// iteration
const linkedPalindrome = (head) => {
  if (!head) return null;

  let vals = [];
  let cur = head;
  while (cur) {
    vals.push(cur.val);
    cur = cur.next;
  }

  return vals.join(",") === vals.join(",").reverse();
};

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 2 -> 7 -> 7 -> 2 -> 3
linkedPalindrome(a); // true
