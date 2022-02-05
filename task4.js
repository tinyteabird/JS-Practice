// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The relative order of the elements may be changed.

var removeElement = function(nums, val) {
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
};