// // Amazon's Alexa team is working on optimizing the customer experience for scenarios where customers ask generic questions.
// // One example of a generic question is "What are good vegetarian restaurants nearby?" In this example,
// // Alexa would then search for a list of vegetarian restaurants in the city and select
// // the nearest X vegetarian restaurants relative to the customer's location.
// // Given an array representing the locations of N vegetarian restaurants
// // in the city implement an algorithm to find the nearest X vegetarian restaurants to the customer's location

// // Input The input to the function/method consists of two arguments: allLocations,
// // a list of elements where each element consists of a pair of integers representing
// // the x and y coordinates of the vegetarian restaurant in the city numRestaurants,
// // an integer representing the number of nearby vegetarian restaurants that would be returned to the customer (X).

// // Output Return a list of elements where each element of the list represents the x and y
// // integer coordinates of the nearest recommended vegetarian restaurant relative to customer's location.
// // If there is one tie, use the location with the closest x coordinate.
// // If no location is possible, return a list with an empty location - not just an empty list.
// // Constraints numRestaurants s size(allLocations)
// // Note The customer begins at the location [0, 0]. The distance from the customer's current location
// // to a recommended vegetarian restaurant location (x,y) is the square root of x2 + y2.
// // If there are ties then return any of the locations as long as you satisfy returning exactly X nearby vegetarian restaurants.
// // The returned output can be in any order.
// // Example Input: allLocations = [[1, 2]. [3,4]. [1,-1] numRestaurants = 2
// // Output: [[1,-1],[1,2]]

// // Explanation: The distance of the customer's current location from location [1, 2] is square root(5) = 2.236
// // The distance of the customer's current location from location [3, 4] is square root(25) = 5
// // The distance of the customer's current location from location [1, -1] is square root(2) = 1.414
// // The required number of vegetarian restaurants is 2, hence the output is [1.-1] and [1, 2].

// p: arr, num
// r: arr /
//    get something: [[x1,y1], [x2,y2]]
//    tie: [[x1, 2],[x1, 3]]
//    no locations: [[]]

// e: [[1,2],[3,4],[1,-1]] 2
// =>
//
// map {0: 2.2, 1: 5, 2: 1.4} k?
// min(map[key] => )

// const findRes = (allLocations, numRestaurants) => {
//   // if (!allLocations.length || !numRestaurants) return [[]];
//   // let map = {};
//   // for (let i = 0; i <= allLocations; i++) {
//   //   const [x, y] = allLocations[i];
//   //   map[i] = Math.sqrt(x ** 2 + y ** 2);
//   // }
//   // for (let i in map) {
//   // }
// };

// SIMPLY SORTING
const findRes = (allLocations, numRestaurants) => {
  if (!allLocations.length || !numRestaurants) return [[]];

  allLocations.sort((a, b) =>
    a[0] ** 2 + a[1] ** 2 === b[0] ** 2 + b[1] ** 2
      ? a[0] - b[0]
      : a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)
  );

  return allLocations.slice(0, numRestaurants);
};

console.log(
  findRes(
    [
      [1, 2],
      [2, 1],
      [3, 4],
      [1, -1],
      [-1, -1],
    ],
    3
  )
);

// // 3:30PM
// // p: array, num
// // r: array
// // e

// // O(4n) O(3n)
// const findRest = (locations, num) => {
//   const map = {};

//   for (let i = 0; i < locations.length; i++) {
//     const [x, y] = locations[i];
//     map[i] = x * x + y * y;
//   }

//   const sortable = [];
//   for (let key in map) {
//     sortable.push([key, map[key]]);
//   }
//   // [[index, distance],[index, distance],[index, distance]]
//   sortable.sort((a, b) => a[1] - b[1]);

//   const result = [];
//   for (let i = 0; i < num; i++) {
//     result.push(locations[sortable[i][0]]);
//   }

//   return result;
// };

// console.log(
//   findRest(
//     [
//       [1, 2],
//       [3, 4],
//       [1, -1],
//     ],
//     2
//   )
// );
