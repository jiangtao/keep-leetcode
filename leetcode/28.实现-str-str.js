/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const len1 = needle.length;
  const len2 = haystack.length;
  if (len1 === 0) return 0;
  if (len1 > len2) return -1;
  let i = 0, j = 0, flag = false
  while(i <= len2 - len1) {
    // 利用substr解，代码比较简单一些。 没有substr只能用下面的方案来循环解决。可以直接indexOf
    if (haystack[i] === needle[0] && haystack.substr(i, len1) === needle) {
      return i
    }
    // if (haystack[i] === needle[0]) {
    //   flag = true
    //   for(; j < len1; j++) {
    //     if (haystack[i+j] !== needle[j]) {
    //       flag = false
    //       break
    //     }
    //   }
    //   if (flag) return i
    //   else j = 1
    // }
    i++
  }
  return -1
};
// @lc code=end
