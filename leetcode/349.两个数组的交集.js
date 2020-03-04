/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (68.13%)
 * Likes:    166
 * Dislikes: 0
 * Total Accepted:    53.3K
 * Total Submissions: 78K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
var intersection = function(nums1, nums2) {
  let short, long, map = {}
  if (nums1.length > nums2.length) {
    short = nums2
    long = nums1
  } else {
    short = nums1
    long = nums2
  }
  for(let l of long) map[l] = 1
  for(let s of short) {
    if (map[s]) map[s]++
  }
  return Object.keys(map).filter(n => map[n] > 1)
};

// @lc code=end

