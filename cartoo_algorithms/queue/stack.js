
// 先入先出
class Q {
  constructor() {
    this.s1 = new Array() // 先入后出
    this.s2 = new Array()
  }
  // 输入统一保存在一个 stack 里面
  push(v) {
    this.s1.push(v)
    return v
  }
  pop() {
    let item
    while(item = this.s1.pop()) this.s2.push(item)
    let result = this.s2.pop()
    while(item = this.s2.pop()) this.s1.push(item)
    return result
  }
}

var q = new Q()
q.push(1)
q.push(1)
q.push(2)
q.push(3)

console.log(q.pop())
console.log(q.pop())
q.push(5)
q.push(6)
console.log(q.pop())

