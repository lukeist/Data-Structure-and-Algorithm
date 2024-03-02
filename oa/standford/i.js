class LinkList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new LinkList("a")
// const b = new LinkList("b")
// const c = new LinkList("c")

// 3 -> a -> b -> c -> null

//                t
//                     c
//      a -> b -> c -> null

// null

// example: 1
const addNode = (head, val) => {
  if (!head) return new LinkList(val);
  let c = head;
  let t = null;
  while (c) {
    t = c;
    c = c.next;
  }

  t.next = new LinkList(val);
  return head;
};
// time O(n)
// space O(1)

const a = addNode(null, "a");
const b = addNode(a, "b");
const c = addNode(a, "c");

// console.log(addNode(a, 1));
// console.log(a.next.next);

//  null
//  null
//      t ------> n
//  t
//                  c
//           n
//      a -> b -x-> c -> null
// "b"

const removeNode = (head, val) => {
  if (!head) return head;
  if (val === head.val) return head.next;

  let t = null;
  let c = head;

  while (c) {
    let n = c.next;
    if (c.val === val) {
      t.next = n;
      c.next = null;
      return head;
    }

    t = c;
    c = n;
  }
  return head;
};

console.log(a);
// console.log(removeNode(a, "b"));
console.log(removeNode(a, "c"));
// O(n)
// O(1)

// a -> c

// expand team;
// new roles
// stabe / agile 2 weeks/ cloud / qa /
// diff role diff opi
// good/  enjoy/learn / diff servies/ unique/ chance/ => help others
// Thomas: god env/
// work/life
