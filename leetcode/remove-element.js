/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
1
let nums = [0,1,2,2,3,0,4,2];
let val = 2;

removeElement(nums, val);
console.log(nums);

function removeElement(nums, val) {
    let end = nums.length-1;
    let start = 0;
    while(start <= end) {
        if(nums[start] === val) {
            if(nums[end] !== val) {
                nums[start] = nums[end];
            }
            end--;
            nums.pop();
        } else {
            start++;
        }
    }
}