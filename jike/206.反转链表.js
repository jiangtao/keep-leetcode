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
// var reverseList = function(head) {
//   let prev = null, target = head, t
//   while(target) {
//     t = target.next
//     target.next = prev
//     prev = target
//     target = t
//   }
//   return prev
// };
var reverseList = function(head, prev = null) {
  // let prev = null, target = head, t
  // while(target) {
  //   t = target.next
  //   target.next = prev
  //   prev = target
  //   target = t
  // }
  // return prev
  if (!head) return prev
  let t = head.next
  head.next = prev
  return reverseList(t, head)
};
// @lc code=end

