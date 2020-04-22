/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 *
 * https://leetcode-cn.com/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (65.11%)
 * Likes:    41
 * Dislikes: 0
 * Total Accepted:    14K
 * Total Submissions: 21.3K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * 给你两个数组，arr1 和 arr2，
 * 
 * 
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 
 * 
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1
 * 的末尾。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i] 各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * 解法: 把代码翻译一遍, 用 sort 来实现
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let map = arr2.reduce((l, p, index) => {
    l[p] = index
    return l
  }, {})
  // sort的  a - b的大小是 排序后
  return arr1.sort((a, b) => {
    const ia = map[a]
    const ib = map[b]
    if (ia === undefined && ib === undefined) {
      return a - b
      // ia 在前, 没有, 按照升序排列
    } else if(ia === undefined) {
      return 1
    } else if (ib === undefined) {
      return -1
    } else {
      return ia - ib
    }
  })
};
// @lc code=end

