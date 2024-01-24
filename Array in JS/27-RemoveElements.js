var removeElement = function(nums, val) {
    for(let i = nums.length; i>=0; i--) {
        if(nums[i] == val) {
            nums.splice(i,1);
        }
    }
};

const  nums = [3,2,2,3];
let val = 3;
removeElement(nums,val);
console.log("Array after removing element " + val + ": "+ nums);
// Output: Array after removing element 3: [2,2]


/*The best approach for removing elements from an array with less 
time and space complexity is to use a two-pointer approach. This 
approach doesn't require modifying the array during the traversal, 
and it has a time complexity of O(n), where n is the length of the 
array, and a space complexity of O(1).
 */

var removeElementGood = function(nums, val) {
    let left = 0;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] !== val) {
            nums[left] = nums[i];
            left++;
        }
    }
    return left;
};

const  arr = [3,2,2,3];
let num = 3;
let newLength = removeElementGood(arr, num);
console.log(`Array after removing elements => [${arr.slice(0, newLength)}]`); // [2, 2]



