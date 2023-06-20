// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// The first kangaroo starts at location x1 and moves at a rate of y1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of y1 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

function kangaroo(x1, v1, x2, v2) {
    let distance_between = Math.abs(x1 - x2);
    let result = 'NO';
    do {
        x1 += v1;
        x2 += v2;
        if (x1 === x2) {
            result = 'YES';
        }
    } while (Math.abs(x1 - x2) < distance_between)
    return result;
}
