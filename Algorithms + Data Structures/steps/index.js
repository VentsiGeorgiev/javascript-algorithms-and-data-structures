// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// n = 3
// #@@  | row0-col0 = #; row0-col1= @; row0-col2= @
// ##@  | row1-col0 = #; row1-col1= #; row1-col2= @
// ###  | row2-col0 = #; row2-col1= #; row2-col2= #


function steps(n) {
    for (let row = 0; row < n; row++) {
        let result = '';
        for (let col = 0; col < n; col++) {
            if (row >= col) {
                result += '#';
            } else {
                result += ' ';
            }
        }
        console.log(result);
    }
}
steps(3);

module.exports = steps;
