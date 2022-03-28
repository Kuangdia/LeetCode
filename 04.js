// Roman Numerals to Integer

// Notes:
// Teach you how to skip one iteration of array loop (Ex. "CM")
// Remind you that object["string"] works
// Consider your AND OR clauses
// Consider looping through string or array

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 2
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Example 3
// Input: s = "XXVII"
// Output: 27
// Explanation: XX + V + II

var romanToInt = function(s) {
  // Assign values to letters
  let result = 0;
  let object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  
  // split into an array of individual letters
  const array = s.split("");

  // Loop through the letters in the array
  let boo = false;
  for (let i = 0; i < array.length; i++) {

    // loop through next value if current value is a constraint
    if (boo === true) {
      boo = false;
      // check for constraints
    } else if (array[i] === "I" && array[i + 1] === 'V') {
      result += 4;
      boo = true;
    } else if (array[i] === "I" && array[i + 1] === 'X') {
      result += 9;
      boo = true;
    } else if (array[i] === "X" && array[i + 1] === 'L') {
      result += 40;
      boo = true;
    } else if (array[i] === "X" && array[i + 1] === 'C') {
      result += 90;
      boo = true;
    } else if (array[i] === "C" && array[i + 1] === "M") {
      result += 900;
      boo = true;
    } else if (array[i] === "C" && array[i + 1] === "D") {
      result += 400;
      boo = true;
    } else {
      // if next letter is not a constraint add number
      for (let key in object) {
        if (array[i] === key) {
          let number = object[key];
          result += number;
          break;
        }
      }
      boo = false;
    }
  }
  return result;
};

console.log(romanToInt("MCDLXXVI"));
// 1476
console.log(romanToInt("MCMXCIV"));
// 1994

// Other solutions
var romanToInt = function(s) {
  romanNum = {
      "I" : 1,
      "V" : 5,
      "X" : 10,
      "L" : 50,
      "C" : 100,
      "D" : 500,
      "M" : 1000
  }
  let ans = 0;
  for (let i = 0; i < s.length; i++){
      if(
          (s[i] == "I" && (s[i+1] == "V" || s[i+1] == "X"))
      || (s[i] == "X" && (s[i+1] == "L" || s[i+1] == "C"))
      || (s[i] == "C" && (s[i+1] == "D" || s[i+1] == "M"))
      ){
          ans = ans + romanNum[s[i+1]] - romanNum[s[i]];
          // skips next number
          i = i+1;
      }
      else{ans = ans + romanNum[s[i]]}
  }
  return ans;
};