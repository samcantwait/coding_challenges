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

// Here is an O(n) solution
function pickingNumbers2(a) {
    const map = new Array(100).fill(0);
    for (let i = 0; i < a.length; i++) {
        map[a[i]]++;
    }

    let max = 0;
    for (let j = 1; j < map.length; j++) {
        max = Math.max(max, map[j] + map[j - 1])
    }
    return max;
}

console.log(pickingNumbers2([1, 1, 2, 2, 4, 4, 5, 5, 5]))