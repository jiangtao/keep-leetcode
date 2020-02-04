/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @description 所有的算法题尽量不用数组方法
 * @description 把时序图画以下更好理解
 * 1. 利用快慢指针， 快指针用来遍历原节点， 慢指用来替换元素
 * 2. 循环之后，遗留的目标元素相当于移动到前面
 * 3. 由于js的特殊性， 需要对后面的数组截取掉，而i就是理想的长度
 */
var removeElement = function(nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if(nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  nums.length = i
  return i
};
// @lc code=end

