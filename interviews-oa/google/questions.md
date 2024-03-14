https://leetcode.com/discuss/interview-question/4831503/google-questions/2291792
solutions: https://leetcode.com/discuss/interview-question/4849502/Google-or-Question

Hi Everyone,

Recently I have gone through onsite rounds, I have compiled few repeated questions asked by Google.
I hope it will be helpful for others who are preparing

Problem: A circle is define by x-axis position, y-axis position, and a
radius. A circle group is a collection of circles that overlap. Given a
list of circles, figure out if they belong to a single circle group

For a rooted tree with any arbitary number of children for each node,
not necessarily n-ary tree.
Remove all the leaf nodes, and store them in a list, this would create
new leaf nodes. Repeat untill all the nodes are removed
Conditions : Freshly created leaf nodes(node whose children are removed)
should not be removed just after its children are removed, unless
there's no other option for us, then we can remove it

Design a search data structure to store and display recent searches. If
a user just clicks the search bar without typing anything, it should
return the N most recent searches. Given a search string it should save
the search and also return the N most recent searches

find a path that has the minimum cost

Given map {X=>123, Y=456}
Input: %X%\_%Y%
Output: 123_456
Given map {USER=>admin, HOME=>/%USER%/home} Input: I am %USER% My home is %HOME% Output: I am admin My home is /admin/home
USER= bob
HOME= /home/%USER% should be substituted as : /home/bob ex2:
home/ %USER% -> /home/bob
Hello %USER% -> Hello bob!
ex3:
The user %USER% is at 50%% -> The user bob is at 50%

You are given a list of user sessions where each user session has start and end times both inclusive. Now, given a value N, find the count of all users at each point in time from [0,N) i.e include 0 but exclude N. Example:
Input:
[(0,3), (1,4) ] N=7
Output:
0->1
1->2
2->2
3->2
4->1

A number of students are taking exams in a room. Students sitting adjacent to each other and taking the same exam can cheat. Arrange the students so that cheating opportunities are minimized. I was free to choose input format.
I chose the input to be a list of length n, denoting n students. The element at index i would indicate the exam student i is taking.
For example, [1,2,3,1,2,2]
Student 0 is taking exam 1
Student 1 is taking exam 2
Student 2 is taking exam 3
Student 3 is taking exam 1
Student 4 is taking exam 2
Student 5 is taking exam 2
Output would be a list with the students re-arranged. An acceptable output for the above case would be [1,2,3,2,1,2].

Replace files with directories if all files in directory are
specified
Example input & output:
allFiles = [
"a/b/c/d.txt",
"a/b/c/e.txt",
"a/b/b.txt",
"a/b/e.txt",
"b/c/d.txt"
]
subsetFiles = [
"a/b/c/d.txt",
"a/b/c/e.txt",
"a/b/b.txt",
"b/c/d.txt"
]
output=[
"a/b/c",
"a/b/b.txt",
"b"
]

You have a stream of rpc requests coming in. Each log is of the
form {id, timestamp, type(start/end)}. Given a timeout T, you need to figure out at the earliest possible time if a request
has timed out.
Eg :
id - time - type
0 - 0 - Start
1 - 1 - Start
0 - 2 - End
2 - 6 - Start
1 - 7 - End
Timeout = 3
Ans : {1, 6} ( figured out id 1 had timed out at time 6 )

Give a list of string, where every string in the list is of size 5. Return the list of 5 string such that all the characters in each of the strings are unique
i.e if we combine all the strings(not nnecessary) we will have 25 unique characters)
eg
Input explanation
List of string with length of 5 each
intput = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "zabcd", "apple", "zebra", "ocean", "quick", "world", "jumps", "foxes", "liver"]

sort all odd elements and leave even elements as it is at their original position

You work as a consultant and have clients in cityA and cityB. On a given day,
say i, you can either
work in cityA and make Ai dollars or you can work in cityB and make Bi dollars. You can also spend
the day traveling between cityA and cityB in which case your earnings that day are 0.
Given Al,A2, ....An and B1, B2,....., Bn, return a schedule S of N days which maximizes your earnings,
where S is a string of length N, and Si = A/B/T where A means work in cityA, B means work in cityB
T means travel on day i. You can start either in cityA or cityB. Example1: A = [23, 4,5 ,101] B = [21,1,10, 100] The optimal schedule S here would be ->"ATBB"
Example 2:
A[25,10,15,10,70] B = [5,5,50,5,30] The optimal schedule S here would be-> "ATBTA"

Give the count of managers who has salary less than average salary of direct and indirect employees
Example:
A->B, A->C, A->D, B->E
Salaries
A = 50000
B = 20000
C = 10000
D = 10000
E = 25000
Answer: 1
Explanation: A is the manager of direct employees B, C, D and indirect employee E so avg. is 16,250 and B = 20000 < E = 25000 so answer is B

There is a robot at location (0, 0) of a 10x10 grid of tiles. Each tile can be one of 8 different colors: (0, 1, ... 7). There is a star at a known location (marked with the color -1) on the grid. You can program the robot by giving it a lookup table of color to direction. The robot will sense the color of the tile it is currently on, and move in the direction (up, down, left, or right) specified by the lookup table you provided. Output a lookup table that guides the robot to the star, if such a table is possible.
Small example grid: [[(0), 1, 0, 0], [3, 2,-1, 3], [0, 0, 0, 2], [0, 0, 0, 4]]

There is a stream of integers. Every time you see a new element in the stream, return the mean value of the last N elements, excluding the largest K elements.
Example:
N=5
K=2
elements so far = [20, 2, -2, 0, 10, 1, 5, -2, 0]
last N elements: [10, 1, 5, -2, 0] largest K elements: [10, 5]
result = (1+(-2)+0)/3 = -0.3333333

Find the length of longest increasing subsequence such that the difference between consecutive elements in LIS is an increasing sequence
Example :
nums -> 1 2 3 4 5 6 ans -> 3
Explanation : the best LIS can be gotten if we take 1 , 2 , 4 ( in this way )
