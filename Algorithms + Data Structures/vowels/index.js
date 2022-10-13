// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;


    // let count = 0;
    // let vowelsObj = {
    //     a: 0,
    //     e: 0,
    //     i: 0,
    //     o: 0,
    //     u: 0
    // };

    // for (let i = 0; i < str.length; i++) {
    //     let char = str[i].toLowerCase();
    //     if (vowelsObj.hasOwnProperty(char)) {
    //         count++;
    //     }
    // }

    // console.log(count);

    // let counter = 0;
    // const checker = ['a', 'e', 'i', 'o', 'u'];

    // for (let char of str.toLowerCase()) {
    //     if (checker.includes(char)) {
    //         counter++;
    //     }
    // }
    // console.log(counter);

}
console.log(vowels('Hi There!'));

module.exports = vowels;
