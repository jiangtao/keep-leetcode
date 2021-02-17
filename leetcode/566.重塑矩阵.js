/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const m = nums.length, n = nums[0].length
  if (r * c  != n * m) return nums
  const L = new Array(r).fill(0).map(x => new Array(c).fill(0))
  for(let x = 0; x < m * n; x++) {
    L[parseInt(x / c)][x % c] = nums[parseInt(x / n)][x % n]
  }
  return L
};
// @lc code=end

