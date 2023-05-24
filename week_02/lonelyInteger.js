// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    a.sort((a, b) => a - b)
    for (let i = 0; i < a.length; i += 2) {
        console.log(a[i], a[i + 1])
        if (a[i] != a[i + 1]) return a[i];
    }
}