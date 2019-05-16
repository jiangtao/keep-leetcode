class Node {
  constructor(val, next) {
    this.val = val || null;
    this.next = next || null;
  }
}
class LinkList {
  constructor() {
    this.head = new Node();
  }
  append(val, next) {
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new Node(val, next);
  }
  print() {
    let count = 0;
    let next = this.head;
    while (next && count < 100) {
      console.log(count, next.val);
      next = next.next;
      count++;
    }
  }
  // 利用stack翻转
  reverse2() {
    let stack = [];
    let next = this.head,
      last,
      item,
      head;
    while (next) {
      stack.push(next);
      next = next.next;
    }
    head = last = stack.pop();
    while (last) {
      item = stack.pop();
      last.next = item;
      last = item;
    }
    return (this.head = head);
  }
  /**
   * null-1-2-3-4-5
   * 2-1-3-4-5
   * 3-2-1-4-5
   */
  reverse() {
    if (!this.head.next || !this.head) return;
    let p = this.head,
      q = p.next,
      r;
    p.next = null;
    while (q) {
      r = q.next;
      q.next = p;
      p = q;
      q = r;
    }
    this.head = p;
  }
  /**
   * 追及问题
   * 两个标记,分别步长1, 2, 如果有环肯定相遇
   * @param {*} LL 链表 
   */
  static hasCircle(LL) {
    var m = LL.head, n = LL.head
    while(m && n) {
      m = m.next
      n = n.next.next
      if(m === n) return true
    }
    return false
  }
}

const linkList = new LinkList();
[1, 2, 3, 4, 5].forEach(v => linkList.append(v));
linkList.print();

console.log("");
linkList.reverse();
linkList.print();


// 1 --> 2 --> 3 --> 4
let obj2 = {val: 2, next: null}
let obj3 = {val: 3, next: null}
let obj4 = {val: 4, next: null}
obj3.next = obj4
obj2.next = obj3
obj4.next = obj2

const ll = {
  head: {
    val: null,
    next: {
      val: 1,
      next: obj2
    }
  }
}
console.log('has circle', LinkList.hasCircle(ll))
console.log('has circle', LinkList.hasCircle(linkList))

module.exports = LinkList;
