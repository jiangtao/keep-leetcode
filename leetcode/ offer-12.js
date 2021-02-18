/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0 || word === "") return false;
  const directs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const find = (j, m, n) => {
    // 边界条件, 越界
    if (
      !(m < board.length && m >= 0) ||
      !(n < board[0].length && n >= 0) ||
      board[m][n] !== word[j]
    )
      return false;
    if (j === word.length - 1) return true;
    let tmp = board[m][n];
    board[m][n] = ''
    const res = directs.some((direct) =>
      find(j + 1, m + direct[1], n + direct[0])
    );
    if (res) return true
    board[m][n] = tmp // 如果没有找到路, 需要撤回本次状态, 下次接着找
    return false;
  };
  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[0].length; n++) {
      // 查找当前位置 是否有符合的路径
      if (find(0, m, n)) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
// console.log(exist([['a']], 'ab'))
