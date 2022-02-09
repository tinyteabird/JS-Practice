// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function(num) {
    num = Number(num.toString());
    if ( num == 0 ) return 0;
	return num%9 == 0 ? 9 : num%9 ;
}
  
