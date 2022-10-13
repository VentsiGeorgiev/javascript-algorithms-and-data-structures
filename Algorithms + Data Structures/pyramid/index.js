// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// n = row = 3;
// col = (n * 2 - 1) 

// let columns = [0,1,2,3,4];
// let row = 0;
// let center = Math.floor((2 * n - 1) / 2)

function pyramid(n) {
    let midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let result = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                result += '#';
            } else {
                result += ' ';
            }
        }
        console.log(result);
    }
}

pyramid(32);

module.exports = pyramid;
