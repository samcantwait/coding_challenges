function separateNumbers(s) {
    let answer = 'NO';
    for (let i = 1; i <= s.length; i++) {
        let split = s.slice(0, i)
        for (let j = i; j < s.length; j++) {
            split = split.concat(parseInt(split) + 1)
            console.log(split)
            if (split.toString() === s) {
                console.log('yessss')
            }
        }
    }
    console.log(answer)
}
// separateNumbers('90071992547409929007199254740993');
separateNumbers('123')
console.log('1' + '1')