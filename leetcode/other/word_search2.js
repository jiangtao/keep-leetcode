// 二维网络单词搜索问题
const boards = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"]
];

const words = ["oath", "pea", "eat", "rain"];

const Trie = require("./trie");

function findResult(boards, words) {
  const trie = new Trie();
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  for (let word of words) trie.insert(word);
  const m = boards.length
  const n = boards[0].length;
  const result = []

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(boards[i][j] in trie.root) {
        _dfs(boards, i, j, '', trie.root)
      }
    }
  }

  return result

  function _dfs(board, i, j, cur_word, cur_node) {
    cur_word += board[i][j]
    cur_node = cur_node[board[i][j]]
    if(Trie.end_of_word in cur_node) {
      result.push(cur_word)
    }

    let tmp
    [tmp, board[i,j]] = [board[i,j], '@']
    for(let k = 0; k < 4; k++) {
      let [x, y] = [i+ dx[k], j + dy[k]]
      if(x >= 0 && x < m && y >= 0 && y < n
        && board[x][y] != '@'
        && (board[x][y] in cur_node)
      ) {
        _dfs(board, x, y, cur_word, cur_node)
      }
    }
    board[i,j] = tmp
  }

}

console.log(Trie.end_of_word)
console.log(findResult(boards, words))
