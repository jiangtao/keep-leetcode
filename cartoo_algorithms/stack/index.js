class Stack {
  constructor() {
    this._stack = []
  }
  push(v) {
    this._stack.push(v)
    return this._stack[this._stack.length - 1]
  }
  pop() {
    return this._stack.pop()
  }

  get() {
    return this._stack
  }
}


var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.get())
console.log(stack.pop())
console.log(stack.get())
console.log('')
