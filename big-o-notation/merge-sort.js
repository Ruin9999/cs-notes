var arrayA = [5,7,2,3,20,8];
var arrayB = [2,4,6,7];

console.log(mergeSort(arrayA,0,arrayA.length));

function merge(arrayA, arrayB) {
    if(!arrayA.length) return arrayB;
    if(!arrayB.length) return arrayA;
    
    if(arrayA[0] >= arrayB[0]) {
        return (arrayB[0] + merge(arrayA, arrayB.slice(1, arrayB.length)));
    } else if(arrayB[0] >= arrayA[0]) {
        return (arrayA[0] + merge(arrayA.slice(1,arrayA.length), arrayB));
    }
}

function mergeSort(arrayA) {
    //What is my base condition?
    var middle;

    if(arrayA.length == 1) return arrayA;

    if(arrayA.length == 2) middle = 0;
    else middle = Math.floor(arrayA.length)/2;
    
    var leftSide = arrayA.slice(0,middle+1);
    var rightSide = arrayA.slice(middle+1, arrayA.length);

    return (merge(mergeSort(leftSide), mergeSort(rightSide)));
}