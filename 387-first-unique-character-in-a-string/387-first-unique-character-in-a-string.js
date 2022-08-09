/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let m1 = new Map()
    for(let i=0;i<s.length;i++){
        if(m1.has(s[i])){
            m1.set(s[i],m1.get(s[i])+1)
        }
        else{
            m1.set(s[i],1)
        }
    }
    for([key,value] of m1){
        if(value === 1){
            return s.indexOf(key)
        }
    }return -1
};