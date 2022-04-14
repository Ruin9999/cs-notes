/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));

//O(n^2)
function findDisappearedNumbers(nums) {
    let result = [];

    //For each value between min and max, loop through the array and check if it is in the array;
    for(let i = 1; i <= nums.length; i++) {
        if(nums.includes(i)) {
            continue;
        } else {
            result.push(i);
        }
    }
    return result;
};
    
function fasterFindDisappearedNumbers(nums) {
    
}