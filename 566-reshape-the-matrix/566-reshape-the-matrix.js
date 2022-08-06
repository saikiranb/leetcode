/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let tot = mat.flat().length;
    let ini = mat.flat()
    
    if(tot !== (r *c)){
        return mat
    }
    mat.length = 0
   for(let i=0;i<r;i++){
        while(ini.length){
            mat.push(ini.splice(0,c))
        }
       
    }
    return mat
    
};