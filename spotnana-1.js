// You are given two 0-indexed integer arrays servers and tasks of lengths n​​​​​​ and m​​​​​​ respectively.
// servers[i] is the weight of the i​​​​​​th​​​​ server, and tasks[j] is the time needed to process the j​​​​​​th​​​​ task in seconds.
// Tasks are assigned to the servers using a task queue. Initially, all servers are free, and the queue is empty.

// At second j, the jth task is inserted into the queue (starting with the 0th task being inserted at second 0).
// As long as there are free servers and the queue is not empty, the task in the front of the queue will be assigned
// to a free server with the smallest weight, and in case of a tie, it is assigned to a free server with the smallest index.

// If there are no free servers and the queue is not empty, we wait until a server becomes free and
// immediately assign the next task.
// If multiple servers become free at the same time, then multiple tasks from the queue will be assigned
// in order of insertion following the weight and index priorities above.
// A server that is assigned task j at second t will be free again at second t + tasks[j].
// Build an array ans​​​​ of length m, where ans[j] is the index of the server the j​​​​​​th task will be assigned to.

// Sample test case 1 :
//            weight             time
//                             0 1 2 3 4 5
// servers = [3,3,2], tasks = [1,2,3,2,1,2]
// q                           2 2 - 2 - 2
//                                 0 - -
//                                     1
// Output: [2,2,0,2,1,2]

// Sample test case 2 :
// [11

// {
//     0 : 0
//     1 : 0
//     2 : 3
//     3 : 0
//     4 : 0
// }
//            i                      j
// servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
//            1 2 3 4 5
//            1 4 3 2 0
//
//                                 1 - 1 - 1 - - - -
//                                   4   4 - - -
//                                           3 -
//                                             2
//                                 1 4 1 4 1 3 2
// Output: [1,4,1,4,1,3,2]
// p: arr, arr
// r: arr

const findAns = (servers, tasks) => {
  // create an array with index of servers
  const indexServers = servers.map((s, i) => i);
  // sort new index arr base on weight of servers, in ascending order
  indexServers.sort((a, b) => servers[a] - servers[b]);

  // put all indexes in a hashmap
  const map = {};
  for (let i of indexServers) {
    map[i] = 0;
  }

  const ans = [];
  // check duration of each task based on hashmap
  for (let j = 0; j < tasks.length; j++) {
    for (let i of indexServers) {
      if (map[i] !== 0) {
        // if a server is not free, reduce the time of that server by 1 sec
        map[i]--;
      } else {
        // if a server free, assign a task then reduce the time of that server by 1 sec
        map[i] = tasks[j];
        map[i]--;
        ans.push(i); // push the assigned server into ans
        break; // after pushing, move on to the next task
      }
    }
  }

  return ans;
};

console.log(findAns([5, 1, 4, 3, 2], [2, 1, 2, 4, 5, 2, 1]));
console.log(findAns([3, 3, 2], [1, 2, 3, 2, 1, 2])); // Output: [2,2,0,2,1,2]
