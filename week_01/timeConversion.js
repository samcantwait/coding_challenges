// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    const ampm = s[s.length - 2] + s[s.length - 1];
    s = s.replace(/[AMP]/g, '');
    const arr = s.split(':');
    if (ampm === 'PM') {
        if (arr[0] !== '12') arr[0] = 12 + parseInt(arr[0]);
    }
    if (ampm === 'AM' && arr[0] === '12') {
        arr[0] = '00';
    }
    return arr.join(':');
}