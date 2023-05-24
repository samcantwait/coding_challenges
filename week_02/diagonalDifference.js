// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    const n = arr[0].length
    let sumPrimary = 0, sumSecondary = 0;
    for (let i = 0, j = n - 1; i < arr.length, j >= 0; i++, j--) {
        sumPrimary += arr[i][i];
        sumSecondary += arr[i][j];
    }
    return Math.abs(sumPrimary - sumSecondary);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))