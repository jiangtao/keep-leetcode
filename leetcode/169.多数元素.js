/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 212
 * 122
 * 1232
 */
var majorityElement = function(nums, l, h) {
  
  function _findTimes(nums, num, l, h) {
    let count = 0
    for(let j = l; j <= h; j++) {
      if (nums[j] === num) count++
    }
    return count
  }
  function _countInRange (nums, l, h) {
    if (l === h) return nums[l]
    let mid = parseInt((h - l) / 2) + l 
    let left = _countInRange(nums, l, mid)  
    let right = _countInRange(nums, mid + 1, h)
    // 如果左边，右边众数相等， 则任意一个众数就是他的值
    if (left === right) return left
    // 如果不相等， 就比较谁的多， 谁多谁就是目标数 
    return _findTimes(nums, left, l, mid) > _findTimes(nums,right, mid+1, h) ? left : right
  }
  return _countInRange(nums, 0, nums.length - 1)
};
// @lc code=end

