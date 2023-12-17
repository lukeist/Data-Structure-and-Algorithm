function findRestaurants(allLocations, numRestaurants) {
  // Write your code here
  let allRestaurantsDistances = [];
  for (let i = 0; i < allLocations.length; i++) {
    let distance = Math.sqrt(
      allLocations[i][0] * allLocations[i][0] +
        allLocations[i][1] * allLocations[i][1]
    );

    allRestaurantsDistances.push([distance, allLocations[i]]);
  }
  allRestaurantsDistances.sort((a, b) => a[0] - b[0]);
  const getRestaurants = allRestaurantsDistances.splice(0, numRestaurants);
  let chosenRestaurants = [];
  for (const restaurant of getRestaurants) {
    chosenRestaurants.push(restaurant[1]);
  }
  console.log(chosenRestaurants);
  return chosenRestaurants;
}

findRestaurants(
  [
    [1, 2],
    [3, 4],
    [1, -1],
  ],
  2
);

minimumDistance(area);
