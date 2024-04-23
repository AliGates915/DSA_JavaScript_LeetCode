# Array DSA LeetCode Questions Important for Interviews 

## 287. Find the Duplicate Number 
Medium
### Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums, using only constant extra space.
### Example 1:
Input: nums = [1,3,4,2,2] Output: 2
### Example 2:
Input: nums = [3,1,3,4,2] Output: 3
### Example 3:
Input: nums = [3,3,3,3,3] Output: 3
## Code :
```javaScript

var findDuplicate = function(nums) {
    let s = nums[0];
    let f = nums[0];
    do{
        s = nums[s];
        f = nums[nums[f]]; 
    }while(s !== f);
    return s;
};
```

# 75. Sort Colors
Medium
### Given an array nums with n objects colored red, white, or blue, sort them in place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the colors red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
## Example 1:
Input: nums = [2,0,2,1,1,0]  Output: [0,0,1,1,2,2]
## Example 2:
Input: nums = [2,0,1]  Output: [0,1,2]

``` TypeScript
function sortColors(nums: number[]): void {
    let l:number = 0;
    let m:number = 0;
    let h:number = nums.length - 1;

    //Swap function

    function swap(i:number, j:number) : void {
        let temp:number = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while(m <= h) {
        if(nums[m] === 0) {
            swap(l,m);
            l++; m++;
        }
        else if(nums[m] === 1) {
            m++;
        } 
        else if(nums[m] === 2) {
            swap(m,h);
            h--;
        }
    }  
};
```
# 26. Remove Duplicate from Sorted Array
### Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
## Example 1
Input: nums = [1,1,2] Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
## Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

```TypeScript
function removeDuplicates(nums: number[]): number {
    let s =1;    
    for(let i=1; i<nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[s++] = nums[i];
        }
    }
    return s;
};
```

# 283. Move Zeroes
Easy
### Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
## Example 1:
Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]
## Example 2:
Input: nums = [0] Output: [0]

```TypeScript
function moveZeroes(nums: number[]): void {
  
  let insertPosition:number = 0;

  for(let i=0; i<nums.length; i++) {
    if(nums[i] !== 0) {
        nums[insertPosition++] = nums[i];
    }
  }
  while(insertPosition < nums.length) {
    nums[insertPosition ++] = 0;
  }
};
```
# 121. Best Time to Buy and Sell Stock
Easy
### You are given an array of prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
## Example 1:
Input: prices = [7,1,5,3,6,4]  Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
``` Typescript
function maxProfit(prices: number[]): number {
  let buy_price= prices[0];
  let profit = 0;

  for(let i = 0; i<prices.length; i++) {
    if(prices[i] < buy_price) {
        buy_price = prices[i];
    }
    else{
        let curr_profit = prices[i] - buy_price;
        profit = Math.max(curr_profit,profit);
    }
  }  

  return profit;
};
```
# 122. Best Time to Buy and Sell Stock II
Medium 
### You are given an integer array of prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it and then immediately sell it on the same day. Find and return the maximum profit you can achieve.
## Example 1:
Input: prices = [7,1,5,3,6,4]    Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
``` Typescript
function maxProfit(prices: number[]): number {
    let profit = 0;

    for(let i=1; i<prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }

    return profit;
};
```
# 1.Two Sum
### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
## Example 1:
Input: nums = [2,7,11,15], target = 9   Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
## Example 2:
Input: nums = [3,2,4], target = 6  Output: [1,2]
``` TypeScript
function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();

    for(let i=0; i<nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    throw new Error("No two sum solution!")
};
```
# 974. Subarrays Sum Divisible by K 
Medium
### Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k. A subarray is a contiguous part of an array.
## Example 1:
Input: nums = [4,5,0,-2,-3,1], k = 5   Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

``` TypeScript
function subarraysDivByK(nums: number[], k: number): number {
  let ans = 0;
  const map: Map<number, number> = new Map();
  map.set(0,1);
  let sum = 0;
  let rem = 0;
  for(let i=0; i<nums.length; i++) {
    sum += nums[i];
    rem = sum % k;
    if(rem < 0) {
        rem += k;
    }
    if(map.has(rem)) {
        ans += map.get(rem)!;
        map.set(rem, map.get(rem)! + 1);
    }else{
        map.set(rem,1);
    }
  }
return ans;
};
```
## Dry Run this line of Code.
``` 1. Initialize variables:
   - ans = 0
   - map = { 0: 1 } (Key: Remainder, Value: Frequency)
   - sum = 0
   - rem = 0

2. Loop through the array `nums`:
   - Iteration 1: nums[0] = 4
     sum = 4
     rem = 4 % 5 = 4
     map = { 0: 1, 4: 1 }
   - Iteration 2: nums[1] = 5
     sum = 4 + 5 = 9
     rem = 9 % 5 = 4
     map = { 0: 1, 4: 2 }
     Since rem is already in the map, ans += map.get(4) = 2, ans = 2
   - Iteration 3: nums[2] = 0
     sum = 9 + 0 = 9
     rem = 9 % 5 = 4
     map = { 0: 1, 4: 3 }
     Since rem is already in the map, ans += map.get(4) = 3, ans = 5
   - Iteration 4: nums[3] = -2
     sum = 9 - 2 = 7
     rem = 7 % 5 = 2
     map = { 0: 1, 4: 3, 2: 1 }
   - Iteration 5: nums[4] = -3
     sum = 7 - 3 = 4
     rem = 4 % 5 = 4
     map = { 0: 1, 4: 4, 2: 1 }
     Since rem is already in the map, ans += map.get(4) = 4, ans = 9
   - Iteration 6: nums[5] = 1
     sum = 4 + 1 = 5
     rem = 5 % 5 = 0
     map = { 0: 1, 4: 4, 2: 1, 0: 1 }
     Since rem is already in the map, ans += map.get(0) = 1, ans = 10

3. Return ans = 10

```


@@@@@@ Previous Code @@@@@@@@

## 27. Remove Element
### Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums that are not equal to val.
Input: nums = [3,2,2,3], val = 3  Output: 2, nums = [2,2,_,_]

## 1st Approach :
```javaScript
var removeElement = function(nums, val) {
    for(let i = nums.length; i>=0; i--) {
        if(nums[i] == val) {
            nums.splice(i,1);
        }
    }
}; 
```
## 2nd Approach :
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
### Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
Input: nums = [1,1,1,2,2,3]
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


## 169. Majority Element
### Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

```javaScript
function majorityElement(nums) {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

// Example usage:
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2
```

## 88. Merge Sorted Array
Easy
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Can you come up with an algorithm that runs in O(m + n) time? Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]  

```javaScript
var merge = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
	
	// Input: nums1 = [1], m = 1, nums2 = [], n = 0, Output: [1]   
    // Copy the remaining elements from nums2 to nums1 if any
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

// Example usage
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
```


# 121. Best Time to Buy and Sell Stock I
Easy
You are given an array prices where prices[i] is the price of a given stock 
on the ith day. You want to maximize your profit by choosing a single day to 
buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot 
achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```javaScript
var maxProfit = function(prices) {
    let mini = prices[0];
    let profit = 0;

    for(let i=1; i<prices.length; i++) {
        let diff = prices[i] - mini;
        profit =Math.max(profit, diff);
        mini = Math.min(mini,prices[i]);
    }

    return profit;
};
// Example usage
let prices = [7,1,5,3,6,4];

console.log(maxProfit(prices)); // Output: 5
```
# 122. Best Time to Buy and Sell Stock II

https://www.youtube.com/watch?v=XcJyzicbGn8

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

```javaScript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};
// Example usage
let prices = [7,1,5,3,6,4];

console.log(maxProfit(prices)); // Output: 7
```

# 55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.


Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Total profit is 4 + 3 = 7.

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```javaScript
var canJump = function (nums) {
    let reachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (reachable < i)
           return false;
        reachable = Math.max(reachable, i + nums[i])
    }
    return true;
};
// Example usage
let prices = [2,3,1,1,4];

console.log(canJump(prices)); // Output: true
```



# 45. Jump Game II

Medium
You are given a 0-indexed array of integers nums of length n. You are initially 
positioned at nums[0]. Each element nums[i] represents the maximum length of a forward 
jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step 
from index 0 to 1, then 3 steps to the last index.
```javaScript
var jump = function(nums) {
    
    for(let i=1; i<nums.length; i++) {
        nums[i] = Math.max(nums[i] + i, nums[i-1]);
    }
    let jump = 0;
    let i = 0;
    while(i<nums.length-1) {
        jump++;
        i = nums[i];
    }
    return jump;
};
// Example usage
let prices = [2,3,1,1,4];

console.log(jump(prices)); // Output: 2
```

# 274. H-index

Medium
```javaScript
function hIndex(citations) {
  citations.sort((a, b) => b - a);

  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
}

// Example usage:
const citations = [3, 0, 6, 1, 5];
const result = hIndex(citations);
console.log(result);  // Output: 3
```


# 380. Index Delete GetRandom O(1)

Medium
Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]


``` javaScript
var RandomizedSet = function () {
    this.arr = [];
    this.map = new Map();
};

RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};

/** 
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        let index = this.map.get(val);
        let lastElement = this.arr[this.arr.length - 1];
        this.arr[index] = lastElement;
        this.map.set(lastElement, index);
        this.arr.pop();
        this.map.delete(val);
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let ind = Math.floor(Math.random() * this.arr.length);
    return this.arr[ind];
};

// Example usage:
let randomizedSet = new RandomizedSet();
randomizedSet.insert(1);
randomizedSet.insert(2);
randomizedSet.insert(3);
console.log(randomizedSet.getRandom()); // Output: 1, 2, or 3
randomizedSet.remove(2);
console.log(randomizedSet.getRandom()); // Output: 1 or 3
```


# 238. Product of Array Except Self
Medium
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

```  javaScript
var productExceptSelf = function (nums) {
    let res = [1];
    for (let i = 1; i < nums.length; i++) {
        res.push(res[i - 1] * nums[i - 1])
    }
    let suffProd = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
       suffProd *= nums[i+1];
       res[i] = res[i]* suffProd;    
    }
    return res;
};
```


# 134. Gas Station
Medium
There are n gas stations along a circular route, where the amount of gas at the ith 
station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from 
the ith station to its next (i + 1)th station. You begin the journey with an empty tank 
at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station's index if you 
can travel around the circuit once in the clockwise direction, otherwise return -1. If 
there exists a solution, it is guaranteed to be unique



```  javaScript
var canCompleteCircuit = function (gas, cost) {
    let lowest_index = 0;
    let totalGas = 0, totalCost = 0;
    let currGas = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currGas = currGas + gas[i] - cost[i];
        if(currGas < 0) {
            lowest_index = i+1;
            currGas = 0;
        }
    }
    if(totalGas >= totalCost) {
        return lowest_index;
    }
    return -1;
};
```

# 13. Roman to Integers
Medium
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58

```  javaScript
function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && romanValues[s[i]] > romanValues[s[i - 1]]) {
            result += romanValues[s[i]] - 2 * romanValues[s[i - 1]];
        } else {
            result += romanValues[s[i]];
        }
    }
    
    return result;
}

// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
```

Roman to Integer
``` javaScript
// Define a function getVal to get the integer value of a Roman numeral character
var getVal = function(ch) {
    switch (ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'N': return 1000;
        default: return 0; // Default case returns 0 for unknown characters
    }
}


// Define the main function romanToInt to convert a Roman numeral string to an integer
var romanToInt = function(s) {
    let n = s.length;
    var sum = 0;
    for (let i = 0; i < n; i++) {
        var ch = s.charAt(i);
        // If the current character represents a value less than the next character,
        // subtract its value from the total sum; otherwise, add its value to the sum
        if ((i + 1) < n && getVal(ch) < getVal(s.charAt(i + 1))) {
            sum = sum - getVal(ch);
        } else {
            sum = sum + getVal(ch);
        }
    }
    return sum; // Return the final sum
};

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

```


12. Integer to Roman
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

``` javaScript
 class Solution {
    intToRoman(num) {
        let res = "";
        let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 
		'IV', 'I'];
        let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

     
	 for (let i = 0; num !== 0; i++) {
            while (num >= values[i]) {
                num -= values[i];
                res += symbols[i];
            }
        }
        return res;
    }
}

const solution = new Solution();
console.log(solution.intToRoman(3549)); // Output: "MMMDXLIX"	
```
58. Length of the Last World
Given a string s consisting of words and spaces, return the length of the last word/ in the string.

A word is a maximal /
substring//
 consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

``` javaScript
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let i = n;
    while (n >= 0 && s[n] === ' ') {
        n--;
    }
    if (n < 0) {
        return 0;
    }
    let count = 0;
    while (n >= 0 && s[n] !== ' ') {
       count++;
       n--;
    }
    return count;
};

// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("Hello World   ")); // Output: 5
console.log(lengthOfLastWord("a ")); // Output: 1

```
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

https://www.youtube.com/watch?v=wtOQaovlvhY

``` javaScript
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Sort the array
    strs.sort();
    
    // Get the first and last strings
    let first = strs[0];
    let last = strs[strs.length - 1];

    let res = "";
    
    // Start to compare
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            break;
        }
        res += first[i];
    }
    return res;
}

// Test the function
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"
```

151. Reverse words in a String
https://www.youtube.com/watch?v=wBxrhWq4L-E

Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

``` javaScript
var reverseWords = function(s) {
    let n = s.length;
    let i = 0, j = n - 1;
    let ans = "";
  
    // Trim leading spaces
    while (s[i] === ' ') {
        i++;
    }
  
    // Trim trailing spaces
    while (s[j] === ' ') {
        j--;
    }
  
    let wordStart = i;
  
    while (i <= j) {
        if (s[i] !== ' ') {
            let wordEnd = i;
            // Find the end of the current word
            while (wordEnd <= j && s[wordEnd] !== ' ') {
                wordEnd++;
            }
            // Extract the current word
            let word = s.substring(wordStart, wordEnd);
            // If there's already content in 'ans', add a space before adding the word
            if (ans.length > 0) {
                ans = word + ' ' + ans;
            } else {
                ans = word;
            }
            // Move 'i' to the next word's start
            i = wordEnd;
            // Update 'wordStart' for the next word
            while (i <= j && s[i] === ' ') {
                i++;
            }
            wordStart = i;
        } else {
            // Skip consecutive spaces
            while (i <= j && s[i] === ' ') {
                i++;
            }
        }
    }
    return ans;
};

// Test the function
console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
```

# 135 Candy 
Hard
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

``` javaScript
var candy = function(ratings) {
    if(ratings.length === 1){
        return 1;
    }

    let ltr = Array(ratings.length).fill(1);
    let rtl = Array(ratings.length).fill(1);

    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i-1] ) {
            ltr[i] = ltr[i - 1] + 1;
        }
    }
    for(let i = ratings.length-2; i >=0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            rtl[i] = rtl[i + 1] + 1;
        }
    }
    let sum = 0;
    for(let i=0; i<ratings.length; i++) {
        sum += Math.max(ltr[i], rtl[i]);
    }
    return sum;
};
```
## 392. Is Subsequence
### Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true
### Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
``` javaScript
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int i=0;
        int j=0;

        while(i < s.size() && j < t.size()) {
            if(s[i] == t[j]){
                i++;
                j++;
            }else{
                j++;
            }
        }
        return (i == s.size());
    }
};
```

