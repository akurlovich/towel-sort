
// You should implement your task here.

// module.exports = 
function towelSort (matrix) {
  let newArr = [];
  if (!(matrix instanceof Array)) {
    return [];
  } else if (matrix.length == 0) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      // console.log(matrix.length);
      if (i == 1) {
        matrix[i] = matrix[i].reverse();
      }
    console.log(matrix[i]);
    }
  }
}
// console.log(towelSort[[1, 2], [3, 4]]);
const matrix = [[1, 2], [3, 4]];
// let nArr = matrix.flat();
// console.log(nArr);

towelSort(matrix);
