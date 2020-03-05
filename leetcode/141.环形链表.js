/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head, pos = 0) {
  if (!head) return false
   let fast = head.next, slow = head
   while (fast && slow) {
     if (fast === slow) return true
     slow = slow.next
     fast = fast.next && fast.next.next
   }
   return false
};
// @lc code=end

