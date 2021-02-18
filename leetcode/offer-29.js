// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  const m = matrix.length, n = matrix[0].length
  const result = []
  let startX = 0
  , endX = n - 1
  , startY = 0
  , endY = m - 1
  , direct = 'left'
  const walk = {
      left () {
          for(let i = startX; i <= endX; i++) {
              result.push(matrix[startY][i])
          }
          startY++
          direct = 'down'
      },
      down () {
          for(let i = startY; i <= endY; i++) {
              result.push(matrix[i][endX])
          }
          endX--
          direct = 'right'
      },
      right () {
          for(let i = endX; i >= startX; i--) {
              result.push(matrix[endY][i])
          }
          endY--
          direct = 'up'
      },
      up () {
          for(let i = endY; i >= startY; i--) {
              result.push(matrix[i][startX])
          }
          startX++
          direct = 'left'
      }
  }
  while(result.length < m * n) {
      walk[direct]()
  }
  return result
};
// @lc code=end
