// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
    const newArr = [...Array(100).fill(0)];
    arr.forEach((num) => {
        newArr[num]++;
    })
    return newArr;
}