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
 * 解法: 计数排序, 把长的次数记录下来, 用短的来循环, 然后剩下的就是短没有 长里面有的
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let L = new Array(1001)
  arr1.forEach(x => L[x] ? L[x]++ : (L[x] = 1))
  let left = []
  arr2.forEach(x => {
    while(L[x]) {
      left.push(x)
      L[x]--
    }
  })
  for(let x = 0; x < L.length; x++) {
    while(L[x]) {
      left.push(x)
      L[x]--
    }
  }
  return left
};
// @lc code=end

