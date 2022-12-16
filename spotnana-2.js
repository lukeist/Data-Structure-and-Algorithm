Given two arrays, write a function that returns a set of values that the two sets have in common.
Example
Input ([1, 2, 4, 8], [2, 8, 50, 99])
Output: {2, 8}




// p: arr, arr;  // there could duplicates
// r: set();
// e:
//  [1, 2, 4, 8], [2, 8, 50, 99]
// [2, 8]
//  [1, 2, 4, 2, 8], [2, 8, 50,1,1, 99]
// [1,2,8]

// [1,2,3,4,5,6], [1,2,3,4,5,6]
// 
// 
// {  1: 1,
//    2: 2,
//    4: 1,
//    8: 1, 
// }

const commonVals = (arr1, arr2) => {
	const common = new Set();
	const arrSet1 = new Set(arr1);
	for (let num of arr2) {
	if (arrSet1.has(num)) common.add(num);
}
	return common;
}



// /
// empty arrays;
// [], [] => []

// worst case:
// [1,2,3,4,5,6], [1,2,3,4,5,6] => [1,2,3,4,5,6]

// [1,2,3] [] => []

// [1,1,1,1,1,1,1,1,..,1], [1,1]
// => [1] [1,1] => [1]

// [1] [1...........................1] 



// Let’s say Spotnana wanted to add an online catalog to sell Spotnana swag to our customers, what steps would you take to design/build this?



// Users: Mobile Apps / Web Browers     ==========> DNS 
//             | public ip: 1.23.4.5
// 		 v
//          (Load Balancer)
// 	   WebServers  (authentication)
//           WS1 WS2    (rate limiting)

// 		  | CUD	 ------- read ----    |
// 	        |
// 		  |	
// Master DB Server   --------  S1, S2 ... 	
// 				DB replication


			
			


	
