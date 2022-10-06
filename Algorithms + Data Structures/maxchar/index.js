// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const allChars = {};
    let maxCounter = 0;
    let maxChar = '';

    for (const char of str) {
        if (allChars[char]) {
            allChars[char] += 1;
        } else {
            allChars[char] = 1;
        }
    }
    for (const key in allChars) {
        if (allChars[key] > maxCounter) {
            maxChar = key;
            maxCounter = allChars[key];
        }
    }
    return maxChar;

}
console.log(maxChar('abcccccccd'));


module.exports = maxChar;
