/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 *
 * https://leetcode-cn.com/problems/range-sum-query-immutable/description/
 *
 * algorithms
 * Easy (59.63%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    30.4K
 * Total Submissions: 50.5K
 * Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
 *
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 * 
 * 示例：
 * 
 * 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * 说明:
 * 
 * 
 * 你可以假设数组不可变。
 * 会多次调用 sumRange 方法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  if (nums.length === 0) return 0
  this.nums = nums
  this.dp = []
  for(let i = 0; i < nums.length; i++) {
    this.dp[i] = (i >= 1 ? this.dp[i-1] : 0) + nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.dp[j] - (i >= 1 ? this.dp[i-1] : 0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

