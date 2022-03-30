// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
  // create an array to store input
  const array = [];
  // check character
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      // push into array stack if true
      array.push(char);
    } else {
      // else remove from array if it's a closing character
      const popped = array.pop();
      // check if it's closing else return false
      if ((char === ")" && popped !== "(") || (char === "]" && popped !== "[") || (char === "}" && popped !== "{")) {
        return false;
      }
    }
  };

  return array.length === 0;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("{[]}"))
console.log(isValid("{[}]}"))