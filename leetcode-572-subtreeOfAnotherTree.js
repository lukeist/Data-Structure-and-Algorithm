/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// p: root, root
// r: boolean;

// find subRoot
// if found, start comparing left && right
// [l r
// [l r

var isSubtree = function (root, subRoot) {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === subRoot.val && compare(current, subRoot)) return true;

    current.left && stack.push(current.left);
    current.right && stack.push(current.right);
  }

  return false;
};

// // recursive O(n) O(n)
const compare = (r1, r2) => {
  if (!r1 && !r2) return true;
  if (r1 && !r2) return false;
  if (!r1 && r2) return false;
  if (r1.val !== r2.val) return false;

  const compareLeft = compare(r1.left, r2.left);
  const compareRight = compare(r1.right, r2.right);

  return compareLeft && compareRight;
};

// iterative
// const compare = (r1, r2) => {
//   const stack1 = [r1];
//   const stack2 = [r2];

//   while (stack1.length > 0 && stack2.length > 0) {
//     const c1 = stack1.pop();
//     const c2 = stack2.pop();

//     if (!c1 && !c2) continue;
//     if (!c1 && c2) return false;
//     if (c1 && !c2) return false;
//     if (c1.val !== c2.val) return false;

//     stack1.push(c1.left);
//     stack1.push(c1.right);
//     stack2.push(c2.left);
//     stack2.push(c2.right);
//   }

//   return stack1.length === 0 && stack2.length === 0;
// };

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const a = new Tree(3);
// const b = new Tree(4);
// const c = new Tree(5);
// const d = new Tree(1);
// const e = new Tree(2);
// const f = new Tree(0);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.right = f;

// const x = new Tree(4);
// const y = new Tree(1);
// const z = new Tree(2);
// x.left = y;
// x.right = z;

// const x = new Tree(4);
const a = new Tree(1);
const b = new Tree(1);
a.left = b;

const x = new Tree(1);

console.log(isSubtree(a, x));

// NOT WORKING
// var isSubtree = function (root, subRoot) {
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val === subRoot.val && !subRoot.left && !subRoot.right)
//       return true;

//     if (current.val === subRoot.val) {
//       const stackS = [subRoot];
//       const stackC = [current];

//       while (stackC.length > 0) {
//         const cS = stackS.pop();
//         const cC = stackC.pop();
//         console.log(cS, cC);

//         if (!cS && cC) return false;
//         if (cS && !cC) return false;
//         if (!cS && !cC) continue;

//         if (cS.val !== cC.val) return false;

//         // cS.left &&
//         stackS.push(cS.left);
//         // cS.right &&
//         stackS.push(cS.right);

//         // cC.left &&
//         stackC.push(cC.left);
//         // cC.right &&
//         stackC.push(cC.right);
//       }
//       return true;
//     }

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }
//   return false;
// };
