// Title: Meeting Rooms
// Difficulty: Medium
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// Example 1:
// Input: [[0,30],[5,10],[15,20]]
// Output: false
// Explanation:
// Meeting 1: [0, 30]
// Meeting 2: [5, 10]
// Meeting 3: [15, 20]
// The person cannot attend all meetings because meeting 2 starts while meeting 1 is still in progress.

// Example 2:
// Input: [[7,10],[2,4]]
// Output: true
// Explanation:
// Meeting 1: [7, 10]
// Meeting 2: [2, 4]
// The person can attend both meetings because meeting 2 starts before meeting 1 ends.

// Note:

// The number of meetings is at least 2 and at most 10^4.
// The input array will always have a non-empty solution and each element of the array will have a positive duration.
// The input array is already sorted in ascending order by start time.

// p: arr;
// r: boolean;

// e: [[0,30],[5,10],[15,20]]
//

const meetingRooms = (a) => {
  a.sort((i, j) => i[0] - j[0]);

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1][1] > a[i][0]) return false;
  }

  return true;
};

console.log(
  meetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

console.log(
  meetingRooms([
    [7, 10],
    [2, 4],
  ])
);

console.log(
  meetingRooms([
    [1, 5],
    [2, 3],
    [4, 6],
  ])
);
console.log(
  meetingRooms([
    [1, 5],
    [2, 5],
    [3, 5],
  ])
);
console.log(
  meetingRooms([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  meetingRooms([
    [1, 3],
    [2, 4],
    [3, 5],
  ])
);
console.log(
  meetingRooms([
    [1, 3],
    [2, 4],
    [4, 5],
  ])
);
console.log(
  meetingRooms([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
console.log(
  meetingRooms([
    [1, 4],
    [4, 8],
    [8, 12],
  ])
);
console.log(
  meetingRooms([
    [1, 4],
    [4, 8],
    [8, 12],
    [12, 16],
  ])
);
