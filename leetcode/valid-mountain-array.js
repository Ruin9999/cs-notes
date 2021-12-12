/**
 * @param {number[]} arr
 * @return {boolean}
 */

let arr = [3,2,1,0];
console.log(validMountainArray(arr));

function validMountainArray(arr) {
    let curr = 0;
    if(arr.length < 3) return false;
    while(arr[curr] < arr[curr + 1]) curr++;
    if(curr === 0 || curr === arr.length - 1) return false;
    while(arr[curr] > arr[curr + 1]) curr++;
    if(curr === arr.length - 1) return true;
    else return false;
};