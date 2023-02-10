class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(num) {
    this.heap.push(num);
    this.heapifyUp();
//   }does (3.) mean sorting an exist collection either descending or ascending? what does 'collection' means here? please give a simplest example for (3.)

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
    }
  }
}
