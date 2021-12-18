/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [3,1,2,4];
sortArrayByParity(nums);
console.log(nums);

function sortArrayByParity(nums) {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        if(nums[start] % 2) { //Odd
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            end--;
        } else {
            start++;
        }
    }
    return nums;
}