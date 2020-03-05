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
  let hash = new Set()
  while(head) {
    if (hash.has(head)) return true
    hash.add(head)
    head = head.next
  } 
  return false
};
// @lc code=end

