// Design a search data structure to store and display recent searches.
// If a user just clicks the search bar without typing anything,
// it should return the N most recent searches.
// Given a search string it should save the search
// and also return the N most recent searches

// p: number int,
// r:
//
// head <-> a <-> b <-> c <-> tail
//

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
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
    const c = this.tail.prev;
    c.next = node;
    node.prev = c;
    node.next = this.tail;
    this.tail.prev = node;
  }

  removeNode(node) {
    const p = node.prev;
    const n = node.next;
    p.next = n;
    n.prev = p;
  }

  moveToTail(node) {
    this.removeNode(node);
    this.insertTail(node);
  }

  removeHead() {
    this.removeNode(head.next);
    return this.head.next.key;
  }
}

class recentSearches {
  constructor(cap) {
    this.cap = cap;
    this.size = size;
    this.searches = {};
    this.dll = new Dll();
  }

  getRecent() {
    const result = [];

    // note: for more accurate order- it should be traverse thru the linked list instead of this:
    for (const [key, val] of Object.entries(this.searches)) {
      result.push(val);
    }
    return result;
  }

  putSearch(string) {
    if (!(string in this.searches)) {
      const node = new Node(string, null);
      this.searches[string] = node;
      this.dll.insertTail(node);

      if (this.cap === this.size) {
        const key = this.dll.removeHead();
        delete this.searches[key];
      } else this.size++;
    } else {
      this.dll.moveToTail(this.searches[string]);
    }
  }
}

//
//
// [a,b,c]
// [b,c,d]
// [b,c,d]

// class RecentSearches {
//   constructor(cap) {
//     this.cap = cap;
//     this.searches = [];
//   }

//   search(string) {
//     if (this.searches.length === this.cap) {
//       if (this.searches.includes(string)) {
//         const i = this.searches.indexOf(string);
//         this.searches.splice(i, 1);
//         this.searches.push(string);
//       } else {
//         this.searches.shift();
//         this.searches.push(string);
//       }
//     } else if (this.searches.length >= 0) {
//       this.searches.push(string);
//     }
//   }
// }

// const s = new RecentSearches(3);

// s.search("1");
// console.log(s.searches);
// s.search("2");
// console.log(s.searches);
// s.search("3");
// console.log(s.searches);
// s.search("4");
// console.log(s.searches);
// s.search("3");
// console.log(s.searches);
