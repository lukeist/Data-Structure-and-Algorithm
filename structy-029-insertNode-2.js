class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// a -> b -> c -> d
// t    c
// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
//      t    i    c

// a -> b -> c -> d
// a -> b -> c -> d -> m
// 4    3    2    1
//                t    c
const insertNode = (head, value, index) => {
  const insert = new Node(value);
  if (index === 0) {
    insert.next = head;
    return insert;
  }

  let current = head;
  let tail = null;

  while (current) {
    index === 0 && (insert.next = current) && (tail.next = insert);

    index--;

    tail = current;
    console.log(index, tail.val);
    current = current.next;
  }

  //   console.log(index, tail);
  return head.next.next.next.next;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;
console.log(insertNode(a, "m", 4));
// a -> b -> c -> d -> m
// 4    3    2    1    0
// c
