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
 * 素数和非素数 和(0, 1)。 那么把1和0排除掉即可
 */
var countPrimes = function(n) {
  if (n < 2) return 0
  let tables = new Array(n+1)
  let count = n - 2
  tables.fill(1)
  for(let i = 2; i < n; i++) {
    if(tables[i]) {
      for(let j = i * 2; j < n; j += i) {
        if (tables[j] === 1) {
          tables[j] = 0
          count--
        }
      }
     }
  }
  return count
};
// @lc code=end

