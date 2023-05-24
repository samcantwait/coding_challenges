// You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

function flippingBits(n) {
    const leadingZeros = n > 0 ? Math.clz32(n) : 31;
    n = n.toString(2).split('');
    const inverted = n.map(num => {
        if (num === '0') return 1;
        return 0;
    })
    for (let i = 0; i < leadingZeros; i++) inverted.unshift(1)
    return parseInt(inverted.join(''), 2)
}

// Solution using unsigned right shift

function flippingBitsRightShift(n) {
    return ~n >>> 0;
}

