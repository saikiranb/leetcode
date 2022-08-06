/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let out = []
    let copy = []
    let temp
    for(let i=0;i<numRows;i++){
        temp=[]
        temp[0] = 1
        temp[copy.length] = 1
        for(let j=1;j<=copy.length-1;j++){
            temp[j] = copy[j-1] + copy[j]
        }
        copy = temp;
        out.push(copy)
    }
    return out
};