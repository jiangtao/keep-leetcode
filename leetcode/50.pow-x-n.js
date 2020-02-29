/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (33.82%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    52.8K
 * Total Submissions: 155.6K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 
 * 
 * 示例 2:
 * 
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 
 * 
 * 示例 3:
 * 
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 说明:
 * 
 * 
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // n 是 偶数的情况， n < 0
  function _myPow(x, n) {
    let sum = 1
    for(let k = n; k >= 1; k /= 2) {
      if (k & 1 > 0) {
        sum *= x
      }
      x = x * x
    }
    return sum
  } 
  if (n === 0) return 1
  else if (n < 0) return 1 / _myPow(x, -n)
  else return _myPow(x, n)
};
// @lc code=end

