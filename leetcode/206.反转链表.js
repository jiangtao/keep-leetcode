/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 * @examples 1->2->3->4->NULL
 */
var reverseList = function(head) {
  let pre = null, target = head, next
  while(target) {
    next = target.next
    target.next = pre
    pre = target
    target = next
  }
  return pre
};
// @lc code=end

