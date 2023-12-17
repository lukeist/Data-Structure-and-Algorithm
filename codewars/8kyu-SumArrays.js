// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
function sum(n) {
  "use strict";
  if (n.length === 0) return 0;
  return n.reduce((p, c) => p + c, 0);
}
