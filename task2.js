// Given an integer x, return true if x is palindrome integer.

var isPalindrome = function(x) {
return x == x.toString().split("").reverse().join("")
};
