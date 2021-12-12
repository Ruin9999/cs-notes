//Implement a recursive binary search function.

//First we sort the array.
var arrayA = [1,2,3,4,5,6]
var x = 7

console.log(binarySearch(arrayA, x, 0, arrayA.length));

function sortArray(arrayA) {
    for(var x = 0; x < arrayA.length; x++) {
        for(var y = 0; y < arrayA.length; y++) {
            if(arrayA[x] <= arrayA[y]) {
                arrayA = switchPos(arrayA, x, y)
            }
        }
    }
    return arrayA;
}

function switchPos(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
    return array;
}

//Binary search function here.
function binarySearch(array, value, start, end) {
    if(start>end) return false;
    var middle = Math.ceil((start+end)/2);
    if(array[middle] == value) return true;
    if(array[middle] > value) {
        return binarySearch(array, value, start, middle-1);
    } else {
        return binarySearch(array, value, middle+1, end);
    }
}
