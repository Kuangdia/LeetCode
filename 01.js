// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
  // map object holds key-value pairs and remembers the original insertion order of the keys
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // current value
    let num1 = nums[i];
    // target value
    let num2 = target - num1;

    if (map.has(num2)) {
      // map.get to retrieve value of num2
      return [map.get(num2), i];
    }
    // set current key-value if nothing was found
    map.set(num1, i);
  }
};