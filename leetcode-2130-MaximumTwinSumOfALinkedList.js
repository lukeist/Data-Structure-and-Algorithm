// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// p: head
// r: max

// e:

// BFS
var pairSum = function (head) {
  //   const map = {};
  const allValues = [];
  const queue = [head];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current) {
      allValues.push(current.val);
      queue.push(current.next);
    }
  }

  let max = -Infinity;

  //   console.log(allValues);
  const allValuesLength = allValues.length;
  for (let i = 0; i < allValues.length / 2; i++) {
    const twinI = allValuesLength - 1 - i;
    allValues[i] = allValues[i] + allValues[twinI];
  }

  console.log(allValues);
  console.log(Math.max(...allValues));
  return Math.max(...allValues);
};

const a = new ListNode(5);
const b = new ListNode(4);
const c = new ListNode(2);
const d = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;

pairSum(a);
