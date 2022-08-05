/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    let len
    let temp=[]
    if(len1 > len2){
        len = len1
    }else{
        len =len2
    }
    for(let i=0;i<len1;i++){
            if(nums2.includes(nums1[i])){
                temp.push(nums1[i])
                nums2[nums2.indexOf(nums1[i])] = 'y'
                nums1[i]='x'
            }
        }
    return temp
};