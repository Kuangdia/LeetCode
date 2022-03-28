//  Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints 
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {
  // check for edge cases
  if (strs.length === 0) {
    return "";
  }

  let result = "";
  // loop through every single letter of first word in array
  for (let i = 0; i < strs[0].length; i++) {
    // loop through every other word in the array
    for (let j = 1; j < strs.length; j++) {
      // if letters don't match just return result;
      if (strs[0][i] != strs[j][i]) {
        return result;
      }
    }
    // else add the letter
    result += strs[0][i];
  }
  return result;
};

console.log(longestCommonPrefix(["lower","low","light"]))
console.log(longestCommonPrefix(["reflower","flow","flight"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))

