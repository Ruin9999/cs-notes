/**
 * @param {number[]} arr
 * @return {number[]}
 */

const arr = [17,18,5,4,6,1]
console.log(replaceElementsFaster(arr));

function replaceElements(arr) {
    let end = arr.length;
    for(let curr = 0; curr < end - 1; curr++) {
        let currMax = arr[curr + 1];
        for(let start = curr + 1; start < end; start++) {
            if(currMax < arr[start]) currMax = arr[start];
            console.log(curr, start);
        }
        arr[curr] = currMax;
    }
    arr[end - 1] = -1;
    return arr;
}

function replaceElementsFaster(arr) {
    let currMax = arr[arr.length - 1];
    for(let i = arr.length - 2; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = currMax;
        currMax = currMax < temp ? temp : currMax;
    }
    arr[arr.length - 1] = -1;
    return arr;
}