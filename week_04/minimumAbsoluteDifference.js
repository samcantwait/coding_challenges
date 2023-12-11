// Given an array of integers, find the minimum absolute difference between any two elements in the array.

function minimumAbsoluteDifference(arr) {
  arr = arr.sort((a, b) => a - b);
  let curDiff;
  let min = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length - 1; i++) {
    curDiff = Math.abs(arr[i] - arr[i + 1]);
    if (curDiff < min) min = curDiff;
  }
  return min;
}

console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
);
