/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 求局部的连续最大值和最小, 总和 或整体的连续最大值或最小值或总和都可以 买彩票等都是一类题
 * 通过 DP来解决。
 * 连续子序列，拆解: 表示到当前位置 i 的最大子序列和
 * [-2,1,-3,4,-1,2,1,-5,4]
 * https://leetcode-cn.com/problems/maximum-subarray/solution/huan-mei-you-nong-dong-jiu-kan-zhe-yi-pian-ti-jie-/
 * 最优子问题解决， 就可以用动态规划
 * 他的子问题是什么呢， 重叠子问题是什么呢
 * 42一样
 
 */
var maxSubArray = function(nums) {
  let max = nums[0] // 全局最大
  let submax = max
  const len = nums.length
  for(let j = 1; j < len; j++) {
    if (submax > 0) {
      submax = submax += nums[j]
    } else {
      submax = nums[j]
    }
    max = Math.max(submax, max)
  }
  return max
};

// @lc code=end

