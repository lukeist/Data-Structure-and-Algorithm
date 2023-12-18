//  5
// push
// [1,2,3,4]
// []

// remove front of queue => return it
// []
// [4,3,2]
//

// return e at front
// [1,2,3,4]
// []

// queue.length === 0?
// []
// []

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
  this.switchTeam = (a1, a2) => {
    while (a1.length > 0) {
      a2.push(a1.pop());
    }
  };
};

MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

MyQueue.prototype.pop = function () {
  this.switchTeam(this.s1, this.s2);
  const poppedE = this.s2.pop();
  this.switchTeam(this.s2, this.s1);
  return poppedE;
};

MyQueue.prototype.peek = function () {
  return this.s1[0];
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};
