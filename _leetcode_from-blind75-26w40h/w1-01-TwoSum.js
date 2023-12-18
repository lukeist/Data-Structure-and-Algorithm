// p: array int, number int;
// r: array;
// e: nums = [2,7,11,15], target = 9
// [0,1]


//              [2,11,15,7]
//map
//val:  index    0  1  2 3
//key:  opNum    7 -2 -6 
//

var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        const oppNum = (target - curNum).toString();
        console.log(map)
        if (curNum in map) {return [map[curNum], i]};
        map[oppNum] = i;
    }
};

console.log(twoSum([2,7,11,15], 9))