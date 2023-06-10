// Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);
    const triangles = [];
    for (let i = 0; i < sticks.length - 2; i++) {
        if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
            triangles.push([sticks[i], sticks[i + 1], sticks[i + 2]])
        }
    }
    let maxPerimeter = 0;
    let largestTriangle;
    triangles.forEach(triangle => {
        const perimeter = triangle.reduce((a, b) => a + b)
        if (perimeter > maxPerimeter) {
            maxPerimeter = perimeter;
            largestTriangle = triangle;
        }
        if (perimeter === maxPerimeter) {
            if (largestTriangle[largestTriangle.length - 1] < triangle[triangle.length - 1]) largestTriangle = triangle;
            if (largestTriangle[largestTriangle.length - 1] === triangle[triangle.length - 1]) {
                if (largestTriangle[0] < triangle[0]) largestTriangle = triangle;
            }
        }
    })
    if (triangles.length > 0) return largestTriangle;
    return [-1];
}

console.log(maximumPerimeterTriangle([1, 2, 3]))