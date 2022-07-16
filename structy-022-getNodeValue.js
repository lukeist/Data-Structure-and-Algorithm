class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll, num
// r: val (str / num) / null

// dfs recursion
// const getNodeValue = (head, index) => {
//   if (index === 0) return head.val;
//   if (!head) return null;

//   return getNodeValue(head.next, index - 1);
// };

// // dfs iteration
const getNodeValue = (head, index) => {
  //   let current = head; ? why not use head directly as under?
  while (head) {
    index--;
    if (index === -1) return head.val;

    head = head.next;
  }

  return null;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'
