// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {

// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {

// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {

// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// h           t
// a <-> b <-> c
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

  removeNode(node) {
    let p = node.prev;
    let n = node.next;
    p.next = n;
    n.prev = p;
  }

  addTail(node) {
    let c = this.tail.prev;
    c.next = node;
    node.prev = c;
    node.next = this.tail;
    this.tail.prev = node;
  }

  moveToTail(node) {
    this.removeNode(node);
    this.addTail(node);
  }

  removeHead() {
    let c = this.head.next;
    this.removeNode(c);
    return c.key;
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
    if (!(key in this.map)) return -1;
    this.dll.moveToTail(this.map[key]);
    return this.map[key].val;
  }

  put(key, val) {
    // if key not in map:
    // addTail(new node)
    // set map[key] = node
    //
    // - if size === cap:
    // --- removeHead
    // --- remove map[headKey]
    // - if size < cap:
    // --- size++
    //
    // if key in map:
    // - (map[key].val = val)
    // - move node to tail: moveToTail(node)

    if (!(key in this.map)) {
      const newNode = new Node(key, val);
      this.dll.addTail(newNode);
      this.map[key] = newNode;

      if (this.size === this.cap) {
        const c = this.dll.removeHead();
        delete this.map[c];
      } else this.size++;
    } else {
      this.map[key].val = val;
      this.dll.moveToTail(this.map[key]);
    }
  }
}
