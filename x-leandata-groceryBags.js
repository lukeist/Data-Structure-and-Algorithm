// Input
const groceryItems = [
  { type: "meat", name: "beef" },
  { type: "fruit", name: "watermelon" },
  { type: "meat", name: "chicken" },
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "orange" },
  { type: "fruit", name: "pineapple" },
  { type: "vegetable", name: "squash" },
  { type: "vegetable", name: "lettuce" },
  { type: "fruit", name: "strawberry" },
  { type: "vegetable", name: "carrots" },
  { type: "vegetable", name: "cucumbers" },
];

const packGroceries = (groceryItems, itemsPerBag) => {
  const bags = [];
  let currentBags = {};

  // for (let i = 0; i < groceryItems.length; i++) {
  //   const item = groceryItems[i];
  //   if (
  //     !currentBags[item.type] ||
  //     currentBags[item.type].length >= itemsPerBag
  //   ) {
  //     if (currentBags[item.type] && currentBags[item.type].length > 0) {
  //       bags.push(currentBags[item.type]);
  //     }
  //     currentBags[item.type] = [item];
  //   } else {
  //     currentBags[item.type].push(item);
  //   }
  // }

  for (let i of groceryItems) {
    if (!currentBags[i.type] || currentBags[i.type].length >= itemsPerBag) {
      if (currentBags[i.type] && currentBags[i.type].length > 0) {
        bags.push(currentBags[i.type]);
      }
      currentBags[i.type] = [i];
    } else {
      currentBags[i.type].push(i);
    }
  }

  console.log("| ----------------------------- currentBags:", currentBags);
  Object.keys(currentBags).forEach((type) => {
    if (currentBags[type].length > 0) {
      bags.push(currentBags[type]);
    }
  });

  return bags;
};

// packGroceries(groceryItems, 3);
// console.log(
packGroceries(groceryItems, 3);
// );

// check 1: if this bag has the same item =>

// [
//   [
// { type: 'fruit', name: 'orange' }
//   ],
// ]

// [[ 0 ]
// [ 1 ]
// [ 3 ]
// [   ]
// [   ]
// [   ]
// [   ]
// [   ]
// [   ]
// [   ]
// [   ]
//
//
// ]
//

// const packGroceries = (groceryItems, itemsPerBag) => {
//   const result = [];

//   for (let item of groceryItems) {
//     for (let bag of result) {
//       // check 2: > itemsPerBag => create a new bagc
//       //
//       // check 0: if there's no bag of this item => create a new bag
//       // some conditions

//       result.push([item]);

//       // check 1: if this bag has the same item =>
//       if (item.type === bag[0].type && bag.length < itemsPerBag) {
//         bag.push(item);
//       }
//     }
//   }

//   return result;
// };
/*
 * Complete the function below
 *
 * @input groceryItems: Array<GroceryObject>
 * @input itemsPerBag: number >= 1
 * @output Array<Array<GroceryObject>>
 *
 * Additional Considerations:
 * * Do not pre-sort the list of groceryItems.
 */

// p: array, number
// r: array
// e:

// [
//   [
//     { type: 'fruit', name: 'watermelon' },
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'orange' }
//   ],
//   [
//     { type: 'vegetable', name: 'squash' },
//     { type: 'vegetable', name: 'lettuce' },
//     { type: 'vegetable', name: 'carrots' }
//   ],
//   [
//     { type: 'meat', name: 'beef' },
//     { type: 'meat', name: 'chicken' }
//   ],
//   [
//     { type: 'fruit', name: 'pineapple' },
//     { type: 'fruit', name: 'strawberry' }
//   ],
//   [
//     { type: 'vegetable', name: 'cucumbers' }
//   ]
// ]

// {
//  fruit: 5
//  vegetbale: 4
//  meat: 2
// }

// {
//  fruit: 3
//  vegetbale: 2
//  meat: 1
// }

// const packGroceries = (groceryItems, itemsPerBag) => {
//     const result = [];
//     const mapItems = {};
//     const mapBag = {};

//     groceryItems.sort();

//     for (let item of groceryItems) {
//       mapItems[item.type] = (mapItems[item.type] || 0) + 1;
//     }

//     for (let key in map) {
//       mapBag[key] = Math.floor(mapBag[key] / itemsPerBag) + 1;
//     }

//     for (let item of groceryItems) {

//     }

// };

/*

/////////////////////////////////// SAMPLES
Sample Input
const groceryItems = [
  { type: 'meat', name: 'beef' },
  { type: 'fruit', name: 'watermelon' },
  { type: 'meat', name: 'chicken' },
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'orange' },
  { type: 'fruit', name: 'pineapple' },
  { type: 'vegetable', name: 'squash' },
  { type: 'vegetable', name: 'lettuce' },
  { type: 'fruit', name: 'strawberry' },
  { type: 'vegetable', name: 'carrots' },
  { type: 'vegetable', name: 'cucumbers' },
];

"packGroceries(groceryItems, 3)"
Sample Output for "packGroceries" function with 3 items per bag
[
  [
    { type: 'fruit', name: 'watermelon' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' }
  ],
  [ 
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'vegetable', name: 'carrots' }
  ],
  [
    { type: 'meat', name: 'beef' },
    { type: 'meat', name: 'chicken' }
  ],
  [
    { type: 'fruit', name: 'pineapple' },
    { type: 'fruit', name: 'strawberry' }
  ],
  [
    { type: 'vegetable', name: 'cucumbers' }
  ]
]

"packGroceries(groceryItems, 4)"
Sample Output for "packGroceries" function with 4 items per bag
[
  [
    { type: 'fruit', name: 'watermelon' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' },
    { type: 'fruit', name: 'pineapple' },
  ],
  [ 
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'vegetable', name: 'carrots' },
    { type: 'vegetable', name: 'cucumbers' }
  ],
  [
    { type: 'meat', name: 'beef' },
    { type: 'meat', name: 'chicken' }
  ],
  [
    { type: 'fruit', name: 'strawberry' }
  ]
]
*/
