//Overly complicated selection sort algo.

//For every variable in arrayA, want to find the smallest value.
//After which, we take that smallest value, add it to arrayB, and remove it from arrayA.
var arrayA = [6,23,4,5,7,12,5,1,10,2];//9
var arrayB = [];
var length = arrayA.length;
for(var i = arrayA.length-1; i >= 0; i--) {
    var minIndex = i;
    var minValue = arrayA[i]; //Start couting from the end of the array.
    for(var x = 0; x < arrayA.length; x++) {
        if(arrayA[x] < minValue) {
            minValue = arrayA[x];
            minIndex = x;
        }
    }
    arrayB.push(minValue);
    arrayA.splice(minIndex, 1);
}

console.log(arrayB);

/* while(1) {
    var minValue = arrayA[0];
    var minIndex;
    for(var i = 0; i < length; i++) {
        if(arrayA[i] <= minValue) {
            //If we find a smaller value.
            minValue = arrayA[i];
            minIndex = i;
        }
    }
    arrayB.push(minValue);
    arrayA.splice(minIndex, 1);
    if(arrayA.length == 0) {
        break;
    }
} */

//How do we implement this with only for loops?