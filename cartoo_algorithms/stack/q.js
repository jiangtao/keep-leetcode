class Stack {
  constructor() {
    this.A = []
    this.B = []
  }
}
var s = new Stack()
s.push(1)
s.push(2)
s.push(3)
console.log('')
console.log(s.pop())
console.log(s.pop())
s.push(5)
console.log(s.pop())
