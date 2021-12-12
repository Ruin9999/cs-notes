/* *
* @param {number} x
* @return {boolean}
*/

//A palindrome number is a number that is symetrical around a vertical axis, e.g 1,11,2,33,44
let x = 121;
console.log(isPalindrome(x));

//Without using string
function isPalindrome(x) {
    if(x < 0) return false;
    
    return x === reversedNo(x);
};

function reversedNo(x) {
    let rev = 0;
    while(x > 0) {
        rev = (rev * 10) + (x % 10);
        x = Math.floor(x/10);
    }

    return rev;
}

//Using string
function isPalindromeString(x) {
    
}