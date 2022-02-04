// Given a binary array nums, return the maximum number of consecutive 1's in the array.
var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let z = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 1) {
            counter++
            console.log("1 " + counter)
        } else {
            z.push(counter);
            console.log(z);
            counter = 0;
        }
    }
    z.push(counter);
    z = Math.max(...z); 
    return z
};