// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

function migratoryBirds(arr) {
    arr.sort((a, b) => a - b);
    let max = 0;
    let count = 0;
    let answer = arr[0];
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[j] === arr[i]) count++;
        else {
            j = i;
            count = 0;
        }
        if (count > max) answer = arr[i];
        max = Math.max(count, max);
    }
    return answer;
}
