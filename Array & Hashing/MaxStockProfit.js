const maxProfit = (prices) => {
    let max = 0;

    for ( let i = 0; i < prices.length; i++){
        for ( let j = i + 1; j < prices.length; j++){
            let maxTemp = prices[j] - prices[i];
            if ( maxTemp > max){
                max = maxTemp;
            } 
        }
    }
    return max; 
};

let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))