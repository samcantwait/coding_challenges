// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result.

function rotateLeft(d, arr) {
    let arrCopy = [...arr];
    for (let i = 0; i < arr.length; i++) {
        arrCopy[i] = arr[(d + i) % arr.length];
    }
    return arrCopy;
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]))