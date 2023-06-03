// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    let start = 0;
    let end = m;
    let count = 0;
    while (end <= s.length) {
        const curArr = s.slice(start, end);
        if (curArr.reduce((a, b) => a + b) === d) count++;
        start++;
        end++;
    }
    return count;
}

console.log(birthday([4], 4, 1))