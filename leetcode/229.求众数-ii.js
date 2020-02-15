/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (42.76%)
 * Likes:    131
 * Dislikes: 0
 * Total Accepted:    10.5K
 * Total Submissions: 24.6K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: [3]
 * 
 * 示例 2:
 * 
 * 输入: [1,1,1,3,3,2,2,2]
 * 输出: [1,2]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 1 
 * 1122
 */
var majorityElement = function(nums) {
  let map = {}, set = new Set(), len = nums.length / 3
  for(let n of nums) {
    if (map[n] === undefined) map[n] = 0
    map[n]++
    if (map[n] > len) set.add(n)
  }
  return Array.from(set)
};
// @lc code=end

