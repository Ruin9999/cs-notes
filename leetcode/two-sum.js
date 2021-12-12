/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

const nums = [3,6,7];
const target = 10;

let result = twoSumComp(nums, target);
console.log(result);

function twoSum(nums, target) {
   for(let x = 0; x < nums.length; x++) {
       for(let y = 0; y < nums.length; y++) {
           if(x === y) {
               continue;
           } else if((nums[x] + nums[y]) === target) {
               return([x,y]);
           } else {
               continue;
           }
       }
   }
};

//We could also use the number's complement to check if the numbers add up correctly

function twoSumComp(nums, target) {
    let comp = [];
    for(let i = 0; i < nums.length; i++) {
        if(comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
}