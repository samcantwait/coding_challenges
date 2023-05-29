// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either 'pangram' or 'not pangram' as appropriate.

function pangrams(s) {
    let alphaArr = Array(26).fill(0);
    s = s.toLowerCase();
    for (let letter of s) {
        const charCode = letter.charCodeAt(0) - 97;
        alphaArr[charCode]++;
    }
    return alphaArr.some(num => num === 0) ? 'not pangram' : 'pangram';
}