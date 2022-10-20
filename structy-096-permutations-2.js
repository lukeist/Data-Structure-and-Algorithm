// p: arr
// r: arr
// e:
// permutations(['a', 'b', 'c']); // ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
//  [a, b] => [[a,b], [b,a]]

//    [a b c]                   []
//                              |
//   [b c]                    [a]
//                      b/         \b
//   [c]              [ab]        [ba]
//                /   / \         /c \c \c
//              abc  acb  cab    bac  bca cba

// base cases
// []    -> [[]]
// [a]   -> [[a]]
// [a,b] -> [[a,b], [b,a]]

const permutations = (items) => {
  if (items.length === 0) return [[]];

  let result = [];
  let firstE = items[0]; /////////////////////////////  return  a
  let itemsWOfirstE = permutations(items.slice(1)); //  return [[b,c], [c,b]]

  for (let item of itemsWOfirstE) {
    for (let i = 0; i <= item.length; i++) {
      result.push([...item.slice(0, i), firstE, ...item.slice(i)]);
    }
  }
  return result;
};
