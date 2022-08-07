/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i
    let flag
    let n = matrix[0].length
    matrix.forEach((key,index)=>{
        if(target >=key[0] && target <=key[n-1]){
            i = index
        }
    })
    if(i!==undefined){
        
       for(let x=0;x<n;x++){
      if(matrix[i][x] === target){
          flag =1
          break
      }else{
          flag =0
      }
   } 
    }else{return false}
   // console.log(i)
   
    if(flag){return true}
    else return false
};