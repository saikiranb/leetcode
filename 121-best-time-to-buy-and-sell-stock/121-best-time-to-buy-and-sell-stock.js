/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    let start =0
    let next = 1
    let maxProfit = 0
    let prevProfit = 0
    while(start < len){
        if(prices[next] > prices[start]){
            prevProfit = prices[next]-prices[start]
            if(maxProfit < prevProfit){
                maxProfit = prevProfit
            }
            
            next = next+1
        }else{
            start = start+1
            
            next = start+1
        }
    }return maxProfit
};