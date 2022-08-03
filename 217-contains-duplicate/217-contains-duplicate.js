/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const len  = nums.length
    let arr = []
    for(let i=0;i<len;i++){
        if(arr.includes(nums[i])){
            return true
        }else{
            arr.push(nums[i])
        }
        
    }
    return false
    
};