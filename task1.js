// Given an array nums of integers, return how many of 
// them contain an even number of digits.

var findNumbers = function(nums) {
    var number = 0;
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i].toString();
        x = x.length;
        if (x%2 == 0) {
            number++;
        } 
    }
    return number
};

findNumbers([555,901,482,1771]) // 1
findNumbers([12,345,2,6,7896]) // 2


