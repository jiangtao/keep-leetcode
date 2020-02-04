/**
 *     1
 *   1   1
 * 1   2   1
 * @param {*} numRows
 * @param {*} A
 * @param {*} i
 * @param {*} j
 */
var generate = function(numRows) {
  let A = [],
    i,
    j;
  for (i = 0; i < numRows; i++) {
    if (!A[i]) A[i] = [];
    for (j = 0; j <= i; j++) {
      if (j === 0) A[i][j] = 1;
      if (i > 1 && j > 0) {
        A[i][j] = A[i - 1][j - 1] + A[i - 1][j];
      }
      if (j === i) A[i][j] = 1;
    }
  }
  return A;
};

var getRow = function(rowIndex) {
  let A = [1], i, j, t
  for(i = 0; i < rowIndex;i++) {
    for(j = 0; j < i;j++) {
      A[j+1] = t[j] + t[j+1]
    }
    A.push(1)
    t = A.slice(0)
  }
  return A
};

var getRow = function(rowIndex) {
  let A = [],
    i,
    j;
  for (i = 0; i <= rowIndex; i++) {
    if (!A[i]) A[i] = [];
    for (j = 0; j <= i; j++) {
      if (j === 0) A[i][j] = 1;
      if (i > 1 && j > 0) {
        A[i][j] = A[i - 1][j - 1] + A[i - 1][j];
      }
      if (j === i) A[i][j] = 1;
    }
  }
  return A[rowIndex];
};

console.log(getRow(5))
