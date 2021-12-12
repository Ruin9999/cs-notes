/**
* @param {number[]} arr
* @return {void} Do not return anything, modify arr in-place instead.
*/

let arr = [1,0,2,3,0,4,5,0];

const duplicateZeros = function (arr) {
    let newArr = [];
    let currNewIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            newArr[currNewIndex] = 0;
            newArr[++currNewIndex] = 0;
            currNewIndex++;
        } else {
            newArr[currNewIndex] = arr[i];
            currNewIndex++;
        }
    }
    for(let i = 0; i < arr.length; i++) {
        arr[i] = newArr[i];
    }
};

duplicateZeros(arr);
console.log(arr);