/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
    
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    
    TEST CASES
    Input: nums = [1,3,5,6], target = 5 Output: 2
    Input: nums = [1,3,5,6], target = 2 Output: 1
    Input: nums = [1,3,5,6], target = 7 Output: 4
    Input: nums = [1,3,5,6], target = 0 Output: 0
    Input: nums = [1], target = 0 Output: 0

 */
var searchInsert = function(nums, target) {
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
        if(target < nums[i] && nums[i - 1] === undefined){
            return i
        }
        if(target > nums[i] && i + 1 === nums.length){
            return i + 1;
        }
        if(nums[i+1] !== undefined && target > nums[i] && target < nums[i+1]){
            return i + 1
        }
    }
};