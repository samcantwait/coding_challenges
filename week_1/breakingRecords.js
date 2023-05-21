// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let record = { min: 0, max: 0 }
    scores.forEach(val => {
        if (val < min) {
            record.min++;
            min = val;
        }
        if (val > max) {
            record.max++;
            max = val;
        }
    })
    return [record.max, record.min]
}