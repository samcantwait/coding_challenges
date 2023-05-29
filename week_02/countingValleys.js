// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

function countingValleys(steps, path) {
    let numValleys = 0;
    let height = 0;
    let inValley = false;
    let pathArr = path.split('');
    pathArr.forEach(unit => {
        if (unit === "D") height--;
        else height++;
        if (height < 0 && !inValley) {
            numValleys++;
            inValley = true;
        }
        if (height >= 0) inValley = false;
    })
    return numValleys;
}

console.log(countingValleys(8, 'DDUUDDUDUUUD'))