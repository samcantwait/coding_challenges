// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const max = arr.slice(1).reduce((a, b) => a + b);
    const min = arr.slice(0, 4).reduce((a, b) => a + b);
    console.log(min, max)
}