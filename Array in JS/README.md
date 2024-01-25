# Array DSA LeetCode Questions Important for Interviews 

## 27. Remove Element.
### Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Input: nums = [3,2,2,3], val = 3 <br>
Output: 2, nums = [2,2,_,_]

### 1st Approach :

```javaScript
var removeElement = function(nums, val) {
    for(let i = nums.length; i>=0; i--) {
        if(nums[i] == val) {
            nums.splice(i,1);
        }
    }
}; 
```
### 2nd Approach :
The best approach for removing elements from an array with less time and space complexity is to use a two-pointer approach. This approach doesn't require modifying the array during the traversal, and it has a time complexity of O(n), where n is the length of the array, and a space complexity of O(1).
```javaScript
var removeElement = function(nums, val) {
    let left = 0;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] !== val) {
            nums[left] = nums[i];
            left++;
        }
    }
    return left;
};
```
## 80. Remove Duplicates from Sorted Array II
### Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]

```javaScript
var removeDuplicates = function(nums) {
    let count = 1;
    let index = 1;

    for(let i=1; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            count ++;
        }else{
            count = 1;
        }
        if(count <= 2) {
            nums[index++] = nums[i]; 
        }
    }
    return index;
};
```

## 169. Majority Element
### Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

```javaScript
var removeDuplicates = function(nums) {
    let count = 1;
    let index = 1;

    for(let i=1; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            count ++;
        }else{
            count = 1;
        }
        if(count <= 2) {
            nums[index++] = nums[i]; 
        }
    }
    return index;
};
```

## 189. Rotate Array
### Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

``` javaScript
var rotate = function(nums, k) {
     k = k % nums.length;

    for(let i = 0; i<k; i++) {
        let lastElement = nums.pop();
        nums.unshift(lastElement);
    }
};
```

### This code first reverses the entire array, then reverses the first k elements, and finally reverses the remaining elements. This effectively rotates the array to the right by k positions in-place and with O(1) extra space.
``` javaScript
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
```
