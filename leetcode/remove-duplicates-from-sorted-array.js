/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);

function removeDuplicates(nums) {
    let start = 0, end = 1; 
    while(end < nums.length) {
        if(nums[start] === nums[end]) {
            end++;
        } else {
            nums[++start] = nums[end];
            end++;
        }
    }
    return(++start);
}