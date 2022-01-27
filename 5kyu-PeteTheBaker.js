function cakes(recipe, available) {
  const numOfCakes = [];
  for (ingredient in recipe) {
    if (ingredient in available === false) return 0;
    numOfCakes.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  console.log(Math.min(...numOfCakes));
  return Math.min(...numOfCakes);
}

// must return 2
cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// // must return 0
// cakes(
//   { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//   { sugar: 500, flour: 2000, milk: 2000 }
// );
