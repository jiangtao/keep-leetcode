class Node{
  constructor(val,next) {
    this.val = val || null
    this.next = next || null
  } 
}
class LinkList {
  constructor() {
    this.head = new Node();
  }
  append(val, next) {
    let cur = this.head
    while(cur.next) {
      cur = cur.next
    }
    cur.next = new Node(val, next)
  }
  print() {
    let count = 0
    let next = this.head;
    while (next && count < 100) {
      console.log(count,next.val);
      next = next.next;
      count++
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
    if(!this.head.next || !this.head) return 
    let p = this.head, q = p.next, r
    p.next = null
    while(q) {
      r = q.next
      q.next = p
      p = q
      q = r
    }
    this.head = p
  }
}

const linkList = new LinkList();
[1,2,3,4,5].forEach(v => linkList.append(v))
linkList.print();

console.log('')
linkList.reverse2()
linkList.print()
