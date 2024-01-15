// [[3], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// cap 3
// {
// 11
// }
//
//
//  h - 11 - 33 - 22 - t
//

// h = t
//

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Dll {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertTail(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  moveToTail(node) {
    this.removeNode(node);
    this.insertTail(node);
  }

  removeHead() {
    const node = this.head.next;
    this.removeNode(node);
    return node.key;
  }
}

class LRUCache {
  constructor(cap) {
    this.cap = cap;
    this.size = 0;
    this.map = {};
    this.dll = new Dll();
  }

  get(key) {
    let node = this.map[key];
    if (!node) return -1;
    this.dll.moveToTail(node);
    return node.val;
  }

  put(key, val) {
    let node = this.map[key];
    if (!node) {
      let newNode = new Node(key, val);
      this.map[key] = newNode;
      this.dll.insertTail(newNode);
      if (this.size === this.cap) {
        const tailKey = this.dll.removeHead();
        delete this.map[tailKey];
      } else this.size++;
    } else {
      node.val = val;
      this.dll.moveToTail(node);
    }
  }
}

// class LRUCache {
//     constructor (cap) {
//         this.cap = cap;
//         this.h = new Node(null);
//         this.map = {};
//     }

//     get(key) {

// //      1
// // t     c     n
// // h <-> 1 <-> 2 <-> 3 <-> 4
//     }

//     put(key, val) {
//     }
// }

// class Node {
//     constructor (val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// //////////////////////
// // c = 4
// // t    c    n
// // h -> 1 -> 2 -> 3 -> 4
// //           t    c
// // h -> 1 -> 2
// //
// // h -> 21 -> 22 -> 11

// // class LRUCache {
// //     constructor (cap) {
// //         this.cap = cap;
// //         this.h = new Node(null);
// //         this.map = {};
// //     }

// //     get(key) {
// //         let t = this.h;
// //         let c = this.h.next;
// // //      1
// // // t     c     n
// // // h <-> 1 <-> 2 <-> 3 <-> 4

// //         console.log(this.h)
// //         while (c) {
// //             let n = c.next;
// //             if (c.val[0] === key) {
// //                 const r = c.val[1]
// //                 t.next = n;
// //                 while (n) {
// //                     t = n;
// //                     n = n.next;
// //                 }
// //                 t.next = c;
// //                 c.next = null;
// //                 return r;
// //             } else {
// //                 t = c;
// //                 c = n;
// //             }
// //         }
// //         return -1;
// //     }

// //     put(key, val) {
// //         if (key !== val) return
// //         let count = 0;
// //         let c = this.h.next;
// //         let t = this.h;
// //         while (c) {
// //             t = c;
// //             c = c.next;
// //             count++;
// //         }

// //         t.next = new Node([key, val]);
// //         count === this.cap && (this.h.next = this.h.next.next);
// //     }
// // }

// // class Node {
// //     constructor (val) {
// //         this.val = val;
// //         this.next = null;
// //     }
// // }

// // // c = 4
// // // t    c    n
// // // h -> 1 -> 2 -> 3 -> 4
// // //           t    c
// // // h -> 1 -> 2
// // //
// // // h -> 21 -> 22 -> 11
