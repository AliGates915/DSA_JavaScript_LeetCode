var rotate = function(nums, k) {
    k = k % nums.length;

    // Reverse the entire array
    reverseArray(nums, 0, nums.length - 1);

    // Reverse the first k elements
    reverseArray(nums, 0, k - 1);

    // Reverse the remaining elements
    reverseArray(nums, k, nums.length - 1);
};
// Helper function to reverse the elements of the array in-place
function reverseArray(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
const nums = [1,1,1,2,2,3];
let result = rotate(nums,3)
console.log(nums.slice(0,result));
