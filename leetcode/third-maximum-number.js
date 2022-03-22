/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [-4,-1,5,2];

console.log(fasterThirdMax(nums));

function thirdMax(nums) {
    let max = []; //0 will be max, 1 is second, 2 is third
    for(let i = 0; i < nums.length; i++) {
        if(max.includes(nums[i])) continue;
        if(nums[i] > max[0] || !max[0]) {
            max[2] = max[1];
            max[1] = max[0];
            max[0] = nums[i];
        } else if(nums[i] > max[1] || !max[1]) {
            max[2] = max[1];
            max[1] = nums[i];
        } else if(nums[i] > max[2] || !max[2]) {
            max[2] = nums[i];
        }
    }
    
    if(max[2] === undefined) return max[0];
    else return max[2];
}

function fasterThirdMax(nums) {
    let max = nums[0], second = -Infinity, third = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(
            nums[i] == max ||
            nums[i] == second ||
            nums[i] == third
        ) continue;

        if(nums[i] > max) {
            third = second;
            second = max;
            max = nums[i];
        } else if(nums[i] > second) {
            third = second;
            second = nums[i];
        } else if(nums[i] > third) {
            third = nums[i];
        }
    }

    if(third == -Infinity) return max;
    else  return third;
}