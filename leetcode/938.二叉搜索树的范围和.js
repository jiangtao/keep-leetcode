/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
 *
 * https://leetcode-cn.com/problems/range-sum-of-bst/description/
 *
 * algorithms
 * Easy (75.98%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    17.8K
 * Total Submissions: 23.4K
 * Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'
 *
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
 * 
 * 二叉搜索树保证具有唯一的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
 * 输出：32
 * 
 * 
 * 示例 2：
 * 
 * 输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * 输出：23
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的结点数量最多为 10000 个。
 * 最终的答案保证小于 2^31。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 * 二分搜索树的特性， node.right.val > node.val > node.left.val
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0
  var dfs = function(root, L, R) {
    if (!root) return
    if (root.val >= L && root.val <= R) {
      sum += root.val
    }
    if (root.val > L) dfs(root.left, L, R)
    if (root.val < R) dfs(root.right, L, R)
  }
  dfs(root, L, R)
  return sum
};
// @lc code=end

