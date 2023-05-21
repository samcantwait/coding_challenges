// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

function processData(input) {
    const inputs = input.split('\r');
    inputs.forEach(item => {
        item.replace('\n', '');
        item = item.trim();
        let [operation, style, words] = item.split(';');
        if (operation === 'C') {
            words = words.split(' ');
            words.forEach((word, index) => {
                if (index !== 0 || style === 'C') {
                    words[index] = word[0].toUpperCase() + word.slice(1);
                }
            })
            words = words.join('');
            if (style === 'M') words += '()'
            console.log(words)
        } else {
            const regex = /[A-Z]/g;
            words = words.replace(regex, ' $&')
            words = words.replace('()', '');
            console.log(words.toLowerCase().trim())
        }
    })
}