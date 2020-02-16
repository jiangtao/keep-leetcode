/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (37.29%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    31K
 * Total Submissions: 83K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0 ) return false
  // 此时的给出要求的二维矩阵， 相当于一个数组， 只不过数据的下标比较特殊
  // idx = col * yL + row
  // 按照二分查找的方法来处理
  const yL = matrix.length
  const xL = matrix[0].length
  let l = 0, h = xL * yL - 1

  while(l <= h) {
    let mid = (l + h) >> 1
    console.log(mid, parseInt(mid / xL), mid % xL)
    let t = matrix[parseInt(mid / xL )][mid % xL]
    if (t === target) return true
    if (t > target) {
      h = mid - 1
    } else {
      l = mid + 1
    }
  }
  return false
};
/**
 * 1 2 
 * l = 0 h = 1 mid = 0
 * l = 1 h = 1 mid = 1
 */
// @lc code=end

