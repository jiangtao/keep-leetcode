/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (!s) return false
  const t = s + s
  return t.substr(1, t.length - 2).includes(s)  
};
var repeatedSubstringPattern = function(s) {
  return /^([a-z]+)\1+$/.test(s)
}
// @lc code=end

