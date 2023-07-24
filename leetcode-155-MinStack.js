// // stack        [4,5,6,7,8,1,2,3]
// // minstack     [4,1]

// class MinStack {
//     constructor () {
//         this.stack = [];
//         this.minstack = [];
//     }

//     push (val) {
//         // if minstack empty && val <= last index of minstack
//         // => push minstack along with stack
//         if (this.minstack.length === 0 || val < this.minstack[this.minstack.length - 1]) {
//             this.minstack.push(val);
//         }
//         this.stack.push(val);
//     }

//     pop () {
//         // pop minstack if last stack = last minstack
//         if (this.stack[this.stack.length - 1] === this.minstack[this.minstack.length - 1]) {
//             this.minstack.pop();
//         }
//         this.stack.pop();
//     }

//     top () {
//         return this.stack[this.stack.length - 1];
//     }

//     getMin () {
//         return this.minstack[this.minstack.length - 1];
//     }
// }

var MinStack = function () {
  this.stack = [];
  this.minstack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (
    this.minstack.length === 0 ||
    val <= this.minstack[this.minstack.length - 1]
  ) {
    this.minstack.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (
    this.minstack[this.minstack.length - 1] ===
    this.stack[this.stack.length - 1]
  ) {
    this.minstack.pop();
  }
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minstack[this.minstack.length - 1];
};

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */
