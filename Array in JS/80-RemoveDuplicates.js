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

const nums = [1,1,1,2,2,3];
let result = removeDuplicates(nums)
console.log(nums.slice(0,result)); // Output: 5