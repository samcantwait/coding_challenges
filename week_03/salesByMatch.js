// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    const sockObj = {};
    ar.forEach(sock => {
        sockObj[sock] = sockObj[sock] ? sockObj[sock] + 1 : 1;
    })
    let count = 0;
    Object.values(sockObj).forEach(value => {
        count += Math.floor(value / 2);
    })
    return count;
}