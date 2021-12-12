/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [-4,-1,0,3];
let result = sortedSquaresN(nums);
console.log(result);

//O(n^2);
function sortedSquares(nums) {
   for(let i = 0; i < nums.length; i++) {
       nums[i] = Math.pow(nums[i], 2);
   }
   
   for(let x = 0; x < nums.length; x++) {
       for(let y = 0; y < nums.length; y++) {
           if(x===y) continue;
           if(nums[x] < nums[y]) {
               let temp = nums[y];
               nums[y] = nums[x];
               nums[x] = temp;
           }
       }
   }
   
   return nums;
};

//O(n);
function sortedSquaresN(nums) {
    let newArr = [];
    let len = nums.length - 1;
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        if(Math.abs(nums[start]) > Math.abs(nums[end])) {
            newArr[len] = Math.pow(nums[start], 2);
            start++;
        } else {
            newArr[len] = Math.pow(nums[end], 2);
            end--;
        }
        len--;
    }
    return newArr;
}