// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;

}
console.log(chunk([1, 2, 3, 4], 2));

// function chunk(array, size) {
//     const numberOfPages = Math.ceil(array.length / size);
//     const chunkArr = Array.from({ length: numberOfPages }, (_, index) => {
//         const start = index * size;
//         const end = start + size;
//         return array.slice(start, end);
//     });
//     return chunkArr;
// }

// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;
//     while (index < array.length) {
//         chunked.push(array.slice(index, index + size));
//         index += size;
//     }
//     return chunked;
// }



module.exports = chunk;
