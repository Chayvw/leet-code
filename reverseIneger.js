// 512 --- 215
// make 2 variables to keep track of results let reverse let current 
// set reverse to 0 and current to the number 
// multiply reverse by 10 
// module current by 10
// you will need to remove the last digit from current by 
// Math.Floor(current/ 10)
// update current and repeat 

var reverse = function (x){
    let isNegative = false;
    let reversed = 0;

    if (x< 0){
        isNegative = true;
        // will make x a positive number
        x *= -1
    }
// itriate through each digi tin the number iterate
    while(x> 0){
        reversed = (reversed * 10) + (x % 10)
        x= Math.floor(x/10)
    }
    if(reversed > 2 ** 31 -1 ){
        return 0
    }
    // if it is a negative the reversed * -1 which will make it positive 
    return isNegative ? (reversed * -1) : reversed
};