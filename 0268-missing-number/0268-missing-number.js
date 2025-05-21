/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    while(nums.includes(i)){
        i++
    }
    return i
};