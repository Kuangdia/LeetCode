// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2
// Input: nums = [1,3,5,6], target = 2
// Output: 1

//Example 3
// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
  // check if nums includes target
  if (nums.includes(target)) {
    return nums.findIndex(searchIndex);

    function searchIndex(i) {
      return i == target;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    // check if target is > i and less than i+1
    if (target < nums[0]) {
      return 0;
      // check if target is greater than last # of array
    } else if (target > nums[nums.length - 1]) {
      return nums.length;
      // check if target is inbetween array
    } else if (nums[i] < target && nums[i+1] > target) {
      return i+1;
    }
  }
};

console.log(searchInsert([1,3], 2));
// 1
console.log(searchInsert([1,3,5], 4));
// 2
// console.log(searchInsert([1,3,5,6], 0));
// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));

