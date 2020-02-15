/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 上述方法利用了 数组的特性， 当删除一个元素的时候， 数组只保留length之前的
 * 因为数组的排序数组， 所以倒着来 或者正着来即可
 */
var removeDuplicates = function(nums) {
  for(let j = nums.length - 1; j >= 0;) {
    if (nums[j] === nums[j-1]) {
      nums.splice(j, 1)
    }
    j--
  }
  return nums.length
};
/**
1. leetcode27题 用过快慢指针
2. 原理是把目标项移动到前面
3. 本题我们理想情况是 把 01234xxx迁移到前面
4. 因为我们用的javascript，增删操作会影响数组的长度， 因此不用splice来做操作
5. 因为js里面会保留多余的元素， 因此理论上写东西需要把后面的舍弃
6. 但是题目没有舍弃， 因此可不做处理
 */

 var removeDuplicates = function(nums) {
   let j = 1
   let i = 0
   for(; j < nums.length; j++) {
     if (nums[j] !== nums[i]) {
       i++
       nums[i] = nums[j]
     }
   }
   nums.length = i + 1
   return i+1
 }
// @lc code=end

