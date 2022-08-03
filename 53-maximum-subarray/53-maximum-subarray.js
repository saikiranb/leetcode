/**
 * @param {number[]} nums
 * @return {number}
 */
//[-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let prevSum = 0;
    let maxSum = nums[0];
    const len = nums.length
    if(len === 1) return nums[0]
    for(let i=0;i<len;i++){
        if(prevSum < 0){
            prevSum =0
        }
        prevSum = prevSum + nums[i]
        maxSum = Math.max(prevSum,maxSum)
        
    }
    return maxSum
};