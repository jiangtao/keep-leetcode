/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (37.47%)
 * Likes:    451
 * Dislikes: 0
 * Total Accepted:    55.4K
 * Total Submissions: 145.1K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let m = {}
  const coinCount = function (n) {
    if (n in m) return m[n]
    if (n === 0) return 0
    if (n < 0) return -1
    let res = amount + 1
    for(let coin of coins) {
      let sub = coinCount(n-coin)
      if (sub === -1) continue
      res = Math.min(res, 1 + sub)
    }
    m[n] = (res === amount + 1 ? -1 : res)
    return m[n]
  }
  return coinCount(amount)
};
// @lc code=end
