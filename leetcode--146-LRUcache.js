var Node = function (key, value) {
  this.key = key;
  this.val = value;
  this.prev = this.next = null;
};

var DoublyLinkedList = function () {
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

DoublyLinkedList.prototype.insertHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

DoublyLinkedList.prototype.removeNode = function (node) {
  // console.log("trying to remove node:", node.key)
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

DoublyLinkedList.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.insertHead(node);
};

DoublyLinkedList.prototype.removeTail = function () {
  let tail = this.tail.prev;
  this.removeNode(tail);
  return tail.key;
};

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.currentSize = 0;
  this.hash = new Map();
  this.dll = new DoublyLinkedList();
};

LRUCache.prototype.get = function (key) {
  let node = this.hash.get(key);
  if (!node) return -1;
  this.dll.moveToHead(node);
  return node.val;
};

LRUCache.prototype.put = function (key, value) {
  let node = this.hash.get(key);
  if (node == null) {
    // new node
    let newNode = new Node(key, value);
    this.hash.set(key, newNode);
    this.dll.insertHead(newNode);
    this.currentSize++;
    if (this.currentSize > this.capacity) {
      let tailKey = this.dll.removeTail();
      this.hash.delete(tailKey);
      this.currentSize--;
    }
  } else {
    // existed node, update its value and move to head;
    node.val = value;
    this.dll.moveToHead(node);
  }
};

// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.val = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoubleLinkedList {
//   constructor() {
//     this.head = new Node();
//     this.tail = new Node();
//     this.head.next = this.tail;
//     this.tail.next = this.head;
//   }

//   insertHead(node) {
//     node.prev = this.head;
//     node.next = this.head.next;
//     this.head.next.prev = node;
//   }

//   removeNode(node) {
//     let prev = node.prev;
//     let next = node.next;
//     prev.next = next;
//     next.prev = prev;
//   }

//   moveToHead(node) {
//     this.removeNode(node);
//     this.insertHead(node);
//   }

//   removeTail() {
//     let tail = this.tail.prev;
//     this.removeNode(tail);
//     return tail.key;
//   }
// }

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.currentSize = 0;
//     this.hash = new Map();
//     this.dll = new DoubleLinkedList();
//   }
//   get(key) {
//     let node = this.hash.get(key);
//     if (node === null || node === undefined) return -1;
//     this.dll.moveToHead(node);
//     return node.val;
//   }

//   put(key, value) {
//     let node = this.hash.get(key);

//     if (node === null || node === undefined) {
//       // new node
//       let newNode = new Node(key, value);
//       this.hash.set(key, newNode);
//       this.dll.insertHead(newNode);
//       this.currentSize++;

//       if (this.currentSize > this.capacity) {
//         let tailKey = this.dll.removeTail();
//         this.hash.delete(tailKey);
//         this.currentSize--;
//       }
//     } else {
//       // existed node, update its value and move to head;
//       node.val = value;
//       this.dll.moveToHead(node);
//     }
//   }
// }
