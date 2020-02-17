/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 *
 * https://leetcode-cn.com/problems/n-th-tribonacci-number/description/
 *
 * algorithms
 * Easy (51.84%)
 * Likes:    26
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 17.5K
 * Testcase Example:  '4'
 *
 * 泰波那契序列 Tn 定义如下： 
 * 
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * 
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 4
 * 输出：4
 * 解释：
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 25
 * 输出：1389537
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 37
 * 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  // 因为只是和3个关联的数有关， 可以将数组简化成3个变量
  let dp = [0,1, 1, 2, 4]
  if (n <= 4) return dp[n]
  let j = 5
  for(;j <= n; j++) {
    dp[j] = dp[j-3] + dp[j-2] + dp[j-1]
    if (j === n) return dp[j]
  }
};
// @lc code=end

