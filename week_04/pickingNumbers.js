// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let counter = 0;
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        let j = i;
        while (a[j] - a[i] <= 1 && j < a.length) {
            counter++;
            j++;
        }
        max = Math.max(counter, max);
        counter = 0;
    }
    return max;
}
