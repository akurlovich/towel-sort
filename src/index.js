
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (!(matrix instanceof Array)) {
    return [];
  } else if (matrix.length == 0) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      // console.log(matrix.length);
      if (i % 2 !== 0) {
        matrix[i] = matrix[i].reverse();
      }
    // console.log(matrix[i]);
    }
  }
  newArr = matrix.flat();
  return newArr;
}
// console.log(towelSort[[1, 2], [3, 4]]);
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// let nArr = matrix.flat();
// console.log(matrix);

// towelSort(matrix);
