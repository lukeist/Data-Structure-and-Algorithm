class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// recursion

// iteration
const zipperLists = (h1, h2) => {
  // a ----------> x ----------> b  ----------> y ----------> c  ----------> z
  // h1   h1.n     h2    h2.n    n1            n2

  let newList = h1;
  // let tail = newList;
  let count = 0;
  while (h1 && h2) {
    if (count % 2 === 0) {
      let n1 = h1.next;
      h1.next = h2;
      h1 = n1;
      // !h2.next && (tail = h2);
    } else {
      let n2 = h2.next;
      h2.next = h1;
      h2 = n2;
      // !h1.next && (tail = h1);
    }
    count++;
    // console.log(h1);
    // console.log(h2);
    // console.log(tail);
    // console.log("----------------------", count);
  }
  // console.log(tail);

  // console.log(newList);
  // console.log(newList.next.next.next);
  // console.log(newList.next.next.next.next.next.next);

  return newList;
};
// s -> 1 -> t -> 2 -> 3 -> 4

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// // a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// zipperLists(a, x);
// // a -> x -> b -> y -> c -> zz\

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // a -> b -> c -> d -> e -> f

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

// // c1 = h1.next
//   // h1.next = h2
//   // h1 = c1
//   // c1.next =

//   while (head1 || head2) {
//     let current1 = head1.next;
//     let current2 = head2.next;
//     head1.next = head2;
//     head1 = current1;
//     // current1 = head1.next;
//     head2.next = head1;
//     head2 = current2;
//     // current2 = head2.next;
//   }

// const zipperLists = (h1, h2) => {
//   // a ----------> x ----------> b  ----------> y ----------> c  ----------> z
//   // h1   h1.n     h2    h2.n    n1            n2

//   let newList = h1;
//   let tail = h1;

//   while (h1 && h2) {
//     let n1 = h1.next;
//     let n2 = h2.next;

//     h1.next = h2;
//     h1 = n1;

//     tail = h2;
//     h2.next = h1;
//     h2 = n2;
//   }

//   !h1 && (tail = h2);
//   !h2 && (tail = h1);

//   console.log(newList.next);
// };
