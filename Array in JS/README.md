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