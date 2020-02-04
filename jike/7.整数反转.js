/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   const MAX = 2 ** 31;
//   const min = -1 * MAX;
//   const max = MAX - 1;
//   const r = String(Math.abs(x))
//   .split("")
//   .reverse()
//   .join("") * (x >= 0 ? 1 : -1)
//   return r >= min && r <= max ? r : 0
// };
var reverse = function(x) {
  const max = 2 ** 31;
  const MAX = max - 1;
  const MIN = -1 * max;
  // if (x * 10 < MIN || x * 10 > MAX) return 0
  let s = "";
  let temp = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  while (x != 0) {
    s += x % 10;
    x = parseInt(x / 10);
  }
  s = s * temp;
  if (s < MIN || s > MAX) return 0;
  return s;
};

// @lc code=end
