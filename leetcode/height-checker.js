/**
 * @param {number[]} heights
 * @return {number}
 */

let heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]
console.log(heightChecker(heights));


function heightChecker(heights) {
    let indicies = [];
    let newHeights = heights.slice(0);
    sortArray(newHeights);
    for(let i = 0; i < heights.length; i++) {
        if(newHeights[i] !== heights[i]) indicies.push(i);
    }
    return indicies.length;
}

function sortArray(arr) {
    for(let x = 0; x < arr.length; x++) {
        for(let y = 0; y < arr.length; y++) {
            if(arr[x] < arr[y]) {
                let temp = arr[x];
                arr[x] = arr[y];
                arr[y] = temp;
            }
        }
    }
}