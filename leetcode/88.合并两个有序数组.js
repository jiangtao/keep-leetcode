/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (46.59%)
 * Likes:    435
 * Dislikes: 0
 * Total Accepted:    114.2K
 * Total Submissions: 243.9K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 题目从nums1修改
 * 想到的做法是 
 * 1. 比大小，使用交互排序
 * 2. 受977题目的影响， 可以从头开始比
 * 因为是递增序列， 两头比
 * 如果 两个里面找到一个 那么就是 a+b+1位置的值
 * 因为是整数，有可能是负数，但其中有数组比完的情况下，对方就是最大值
 */
var merge = function(nums1, m, nums2, n) {
  let a = m - 1, b = n - 1
  const min = Number.MIN_SAFE_INTEGER
  while(a+b >= -1) {
    let left = nums2[b] === undefined ? min : nums2[b], 
    right = nums1[a] === undefined ? min : nums1[a]
    if (left > right) {
      nums1[a+b+1] = left
      b--
    } else {
      nums1[a+b+1] = right
      a--
    }
  }
  return nums1
};
// @lc code=end

