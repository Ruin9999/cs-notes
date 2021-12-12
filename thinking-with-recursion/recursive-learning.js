//Link: https://medium.com/@daniel.oliver.king/getting-started-with-recursion-f89f57c5b60e

console.log(noOfHandShakes(4,0));

function reverse(string) {
    if(string.length < 2) return string;
    return(reverse(string.slice(1, string.length)) + string[0]); //We remove the first item from the array and add it to the back
}

function printAll(array) {
    if(array.length <= 1) return array;
    return (array[0] + printAll(array.slice(1, array.length)));
}

function checkIfPalindrome(string) {
    if(string.length<2) return true; //If we have gone through the whole string without returning an error, we can assume that it is a palindrome.
    
    if(string[0] == string[string.length-1]) {
        return checkIfPalindrome(string.slice(1,string.length-1));
    } else {
        return false;
    }
}

function noOfHandShakes(n,i) {
    if(i >= n) return 0;
    return (n - (1+i)) + noOfHandShakes(n, ++i);
}