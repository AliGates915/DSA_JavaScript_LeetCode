function nextPermutation(nums) {
  let i = nums.length - 2;

  // Find the first decreasing element from the end
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }

  if (i >= 0) {
      // Find the next larger element to nums[i] from the end
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
          j--;
      }
      // Swap nums[i] and nums[j]
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the subarray after index i
  reverse(nums, i + 1);
}

function reverse(arr, start) {
  let end = arr.length - 1;
  while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
  }
}

// Example usage
let nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums); // Output: [1, 2, 3]
