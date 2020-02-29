/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (70.91%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    30.4K
 * Total Submissions: 42.8K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 
 * 
 * 示例 2：
 * 
 * 输入：[-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A 已按非递减顺序排序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 * 一次循环，需要存两个值。
 * 上一次i = 0 下一次换位置的索引j
 */
var sortedSquares = function(A) {
  const len = A.length
  let a = 0, b = len - 1, i = b
  let L = []
  while(i >= 0) {
    let left = A[b] ** 2, right = A[a] ** 2
    if (left > right) {
      L[i] = left
      b--
    } else {
      L[i] = right
      a++
    }
    i--
  } 
  return L
};
// @lc code=end

