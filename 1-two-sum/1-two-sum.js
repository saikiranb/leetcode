/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length
    let temp
    
    for(let i=0;i<len;i++){
        temp = target - nums[i]
        if(nums.includes(temp) && i!==nums.indexOf(temp)){
            if(temp === nums[i]){
                return [nums.indexOf(temp),nums.lastIndexOf(temp)]
            }
                 return [i,nums.indexOf(temp)]
            
           
        }
        
    }
};