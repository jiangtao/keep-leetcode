// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  var L = Array.apply(null, {length: 101}).map(x => 0)
  for(let i = 0; i < nums.length; i++) {
    L[nums[i]]++
  }
  for(let i = 1; i <= 100; i++) {
    L[i] += L[i-1]
  }
  var R = []
  for(let i = 0; i < nums.length; i++) {
    R[i] = nums[i] ? L[nums[i] - 1] : 0
  }
  return R
};
// @lc code=end
