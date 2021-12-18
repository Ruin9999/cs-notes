/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let arr = [1];
moveZeroes(arr);
console.log(arr);

function moveZeroes(nums) {
    let lastNonZero = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[lastNonZero++] = nums[i];
        }
    }

    while(lastNonZero < nums.length) {
        nums[lastNonZero] = 0;
        lastNonZero++;
    }
}