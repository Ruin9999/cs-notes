//Recursive function to find a number's factorial.
function findFactorial(factorial) {
    if(factorial == 1) return 1; //If we have reached the end, we want to stop the loop.
    return factorial * findFactorial(factorial-1); //The loop will go 1 * 2 * 3 * 4 * 5 if the input is 5.
}

console.log(findFactorial(5));