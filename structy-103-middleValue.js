// https://structy.net/problems/premium/middle-value

// p: head of ll
// r: val (num/str)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  let cur = head;
  const vals = [];
  while (cur) {
    vals.push(cur.val);
    cur = cur.next;
  }

  const len = vals.length;
  return len % 2 === 0 ? vals[len / 2] : vals[len / 2 - 0.5];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(middleValue(a));

const f = new Node("f");
e.next = f;

console.log(middleValue(a));
