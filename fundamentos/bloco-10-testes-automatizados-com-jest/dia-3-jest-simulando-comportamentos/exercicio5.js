function uppercase(string) {
    return string.toUpperCase();
}

function firstLetter(string) {
    return string.charAt(0);
}

function concatenate(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return undefined;
    }
    return string1 + string2;
}

module.exports = { uppercase, firstLetter, concatenate };

// https://stackoverflow.com/questions/3427132/how-to-get-first-character-of-string
// https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number