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

// { type: "fruit", name: "strawberry" },
// { type: "fruit", name: "apple" },
// { type: "fruit", name: "orange" },
// { type: "fruit", name: "watermelon" },
// { type: "fruit", name: "pineapple" },
// { type: "meat", name: "beef" },
// { type: "meat", name: "chicken" },
// { type: "vegetable", name: "squash" },
// { type: "vegetable", name: "lettuce" },
// { type: "vegetable", name: "carrots" },
// { type: "vegetable", name: "cucumbers" },

// cT = meat
// bag []
// cart [beef,chicken]
const packGroceries = (groceryItems, itemsPerBag) => {
  groceryItems.sort((a, b) => a.type.localeCompare(b.type));

  let currentType = groceryItems[0].type;
  let bag = [];
  const result = [];

  let i = 0;
  while (i < groceryItems.length) {
    const g = groceryItems[i];
    if (g.type === currentType) {
      if (bag.length === itemsPerBag) {
        result.push(bag);
        bag = [];
      } else {
        bag.push(g);
        i++;
      }
    } else {
      result.push(bag);
      bag = [];
      currentType = g.type;
    }
  }

  if (bag.length > 0) result.push(bag);
  result.sort((a, b) => b.length - a.length);
  return result;
};

console.log(packGroceries(groceryItems, 3));
// console.log(packGroceries(groceryItems, 4));
