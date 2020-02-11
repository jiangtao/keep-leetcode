/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 12 = 2 * 6
 * 12 = 3 * 4
 * 12 = sqrt(12) * sqrt(12) 分界线
 * 12 = 4 * 3
 * 12 = 6 * 2
 * 因为每一次的数字都是由两个数相乘，且素数与素数之积，肯定不是素数
 */
var countPrimes = function(n) {
  const isPrime = function(n) {
    if (n === 2) return true
    const max = Math.ceil(Math.sqrt(n))
    for(let i = 2; i <= max; i++) {
      if (!(n % i)) return false
    }
    return true
  }
  let count = 0
  for(let i = 2; i < n; i++) {
    if (isPrime(i)) count++
  }
  return count
};

// @lc code=end

