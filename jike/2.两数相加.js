/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 2 4 3
  // 5 6 4
  // 8 0 7
  // 1. 反转连表，最后拼接， 最后反转
  const __combine = function __combine(l1, l2) {
    // 下一个的结果
    const h = {
      val: typeof l1.val === 'number'  ? l1.val + l2.val : 0,
      next: null
    };
    if (!l1) return h
    if(l1.next) {
      h.next = __combine(l1.next, l2.next) 
      console.log(h.next)
      h.val = l1.val + l2.val + parseInt(h.next.val / 10)
      h.next.val %= 10
    }
  };
  return __combine(l1, l2);
};
// @lc code=end
