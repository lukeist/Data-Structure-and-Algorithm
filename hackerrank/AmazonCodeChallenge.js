// function findRestaurants(allLocations, numRestaurants) {
//   // Write your code here
//   let allRestaurantsDistances = [];
//   for (let i = 0; i < allLocations.length; i++) {
//     let distance = Math.sqrt(
//       allLocations[i][0] * allLocations[i][0] +
//         allLocations[i][1] * allLocations[i][1]
//     );

//     allRestaurantsDistances.push([distance, allLocations[i]]);
//   }
//   allRestaurantsDistances.sort((a, b) => a[0] - b[0]);
//   const getRestaurants = allRestaurantsDistances.splice(0, numRestaurants);
//   let chosenRestaurants = [];
//   for (const restaurant of getRestaurants) {
//     chosenRestaurants.push(restaurant[1]);
//   }
//   console.log(chosenRestaurants);
//   return chosenRestaurants;

// }

// findRestaurants(
//   [
//     [1, 2],
//     [3, 4],
//     [1, -1],
//   ],
//   2
// );

function minimumDistance(area) {
  const width = arr[0].length,
    height = arr.length;

  // Stores the position of the "1" and "2"
  let one, nine;
  // Horizontal and vertical distances between
  // the "1" and "2"
  let dist_x, dist_y;

  // Figure out where the "1" and "2" is
  for (let x in arr) {
    for (let y in arr[x]) {
      if (arr[x][y] === 1) {
        one = [x, y];
      } else if (arr[x][y] === 9) {
        nine = [x, y];
      }
    }
  }

  // Sets the horizontal and vertical distances
  // between the nine numbers
  dist_x = Math.abs(one[1] - nine[1]);
  dist_y = Math.abs(one[0] - nine[0]);

  // If the distance is longer than half the size of
  // the board in either direction, we go the other way
  // instead.
  if (dist_x > width / 2) {
    dist_x = width - dist_x;
  }

  if (dist_y > height / 2) {
    dist_y = height - dist_y;
  }
}

const area = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
];

minimumDistance(area);
