/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 * 上面的查找次数 是暴力求解
 */
var repeatedStringMatch = function(A, B) {
  if (!A) return -1
  let count = 1, s = A, t = s.includes(B)
  while(s.length <= 10000 && !t) {
    count++
    s += A
    t = s.includes(B)
  }
  return t ? count :  -1
};
// 
var repeatedStringMatch = function(A, B) {
  // repeat之后的长度， 提前推理出来，减少检查次数 
  const maxLen = A.length * 2 + B.length
  let count = 1, repeat = A
  while(repeat.length <= maxLen) {
    if (repeat.includes(B)) return count
    count++
    repeat += A
  }
  return -1
};
// @lc code=end

