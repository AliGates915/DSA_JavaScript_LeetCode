# Top Interviews LeetCode String Questions 

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
