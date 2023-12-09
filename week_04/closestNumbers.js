// Given a list of unsorted integers, arr , find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [],
    difference = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    let currentDiff = arr[i + 1] - arr[i];
    if (currentDiff < difference) {
      difference = currentDiff;
      newArr = [arr[i], arr[i + 1]];
    } else if (currentDiff === difference) {
      newArr.push(arr[i], arr[i + 1]);
    }
  }
  return newArr;
}
