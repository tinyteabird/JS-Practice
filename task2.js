// Given an integer x, return true if x is palindrome integer.

var isPalindrome = function(x) {
    let y;
    let array = [];
    let z;
    if (x<0) {
        return false;
    } else if (x===0) {
        return true
    } else {
    x = x.toString();
    y = x;
    for (let i=0; i<y.length; i++) {
        z = y.charAt(i);
        array.unshift(z);
    } 
    y = array.join("");
    };
    if (x === y) return true;
    else return false
};

