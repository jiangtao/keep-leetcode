// 最大优先队列
const { upMaxAdjust, swap, downAdjustMaxHeap } = require('./binaryHeap')
class Q {
  constructor(data) {
    this.data = []
  }
  push(v) {
    this.data[this.data.length++] = v
    upMaxAdjust(this.data)
  }

  pop() {
    let head = this.data[0]
    swap(this.data, 0, this.data.length - 1)
    downAdjustMaxHeap(this.data, 0, --this.data.length)
    return head
  }
  get() {
    return this.data
  }
}

const q = new Q() 
q.push(3)
q.push(4)
q.push(5)
q.push(6)
console.log(q.get())
console.log(q.pop())
console.log(q.get())
