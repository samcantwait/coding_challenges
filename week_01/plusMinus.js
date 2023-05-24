// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    arr.forEach(value => {
        if (value > 0) pos++;
        else if (value < 0) neg++;
        else zero++;
    })
    function fix(num) {
        return (num / arr.length).toFixed(6);
    }
    console.log(fix(pos))
    console.log(fix(neg))
    console.log(fix(zero))
}