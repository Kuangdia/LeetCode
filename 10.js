// Implement strStr()

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function(haystack, needle) {
  // check for edge cases
  if (needle.length === 0 || (haystack.length === 1 && needle.length === 1)) {
    return 0;
  }
  // check if needle matches with haystack
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }

};

console.log(strStr("abc", "c"));
console.log(strStr("a", "a"));
console.log(strStr("hello", ""));
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));