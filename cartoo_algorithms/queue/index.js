class Q {
  constructor() {
    this._q = []
  }
  push(v) {
    this._q.push(v)
    return this._q[this._q.length - 1]
  } 
  pop() {
    return this._q.shift()
  }
  get() {
    return this._q
  }
}

var q = new Q()
q.push(1)
q.push(2)
q.push(3)
console.log(q.get())
console.log(q.pop())
console.log(q.get())
console.log('')
