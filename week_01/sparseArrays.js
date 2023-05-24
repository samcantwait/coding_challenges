// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {
    const arr = []
    queries.forEach(query => {
        let results = 0;
        for (let string of strings) {
            if (string === query) results++
        }
        arr.push(results)
    });
    return arr;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))