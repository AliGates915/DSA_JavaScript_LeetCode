# Top Interviews LeetCode String Questions 

# 28. Find the Index of the First Occurrence in a String
Easy 
## Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
### Example 1:
Input: haystack = "sadbutsad", needle = "sad"   Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
### Example 2:
Input: haystack = "leetcode", needle = "leeto"    Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

```TypeScript
function strStr(haystack: string, needle: string): number {
    let n1 = haystack.length;
    let n2 = needle.length;

    if(n2 > n1) {
        return -1;
    }
    let j = 0, i = 0, start = 0;
    while(i < n1  && j < n2) {
        if(haystack[i] === needle[j]){
            if(i-start+1 === n2) {
                return start;
            }
            i++;
            j++;
        }
        else{
            j = 0;
            start ++;
            i = start;
        }
    }
    return -1;
};
```
# 680. Valid Palindrome II
Easy
## Example 1:
Input: s = "aba"  Output: true
## Example 2:
Input: s = "abca"   Output: true
Explanation: You could delete the character 'c'.

```TypeScript
function isPalidrome(s: string, l: number, r:number) : boolean {
    while(l < r) {
        if(s.charAt(l) === s.charAt(r)) {
            l ++;
            r --;
        }else{
            return false;
        }
    }
    return true;
}
function validPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    while(l < r) {
        if(s.charAt(l) === s.charAt(r)) {
            l ++;
            r --;
        }else{
            return isPalidrome(s, l+1, r) || 
            isPalidrome(s, l, r-1);
        }
    }
    return true;
};
```




# 20. Valid Parentheses
Easy
## Example 1:
Input: s = "()"    Output: true
## Example 2:
Input: s = "()[]{}"  Output: true

https://leetcode.com/problems/valid-parentheses/
```TypeScript
function isValid(s: string): boolean {
      const stack: string[] = [];

        for (const c of s) {
            if (c === '(') {
                stack.push(')');
            } else if (c === '{') {
                stack.push('}');
            } else if (c === '[') {
                stack.push(']');
            } else if (stack.length === 0 || stack.pop() !== c) {
                return false;
            }
        }
    return stack.length === 0;
};
```
