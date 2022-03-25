// Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Examples

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  // check if it's a positive integer or return false
  if (x < 0) {
    return false
  }

  // reverse the number
  const reverseNum = parseInt(x.toString().split("").reverse().join(""));

  // compare new number with previous number for exact match
  if (reverseNum === x) {
    return true;
  }
  return false;

};

console.log(isPalindrome(121))

console.log(isPalindrome(-121))

console.log(isPalindrome(10))