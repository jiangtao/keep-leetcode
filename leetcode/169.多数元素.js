/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 1 2 3 3 3
 * 3 3 2 1 3
 */
var majorityElement = function(nums) {
  // 假设众数是1，其他是-1，则有众数的话 和一定大于0
  let count = 0,
    candidate;
  for (let n of nums) {
    if (count === 0) candidate = n
    count += candidate === n ? 1 : -1;
  }
  return count > 0 ? candidate : -1;
};
// @lc code=end
