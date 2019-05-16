// 复习所有的数组API

const A = [1,2,3,4,5]
const B = [1.5, 2.5, 3.5, 3.6, 4.5, 5.1]

// add
A.push(6)
A.unshift(0)
A.splice(0,1, -1)
if(typeof A.del === 'function') A.del(-1)
console.log(A)

// delete
A.pop()
A.shift()
A.splice(0,1)
console.log(A)
console.log('')
// find
console.log(A.indexOf(2))
console.log(A.lastIndexOf(2))
console.log(A.findIndex(v => v === 2))
console.log(A.filter(v => v === 2))
console.log('')

// 遍历
A.forEach(console.log)

// modify
console.log('')
// to string
console.log(A.toString())
console.log(A.join())
console.log('')

// concat
console.log(A.concat(B))
console.log(A)
console.log('')

// reverse
console.log(A.reverse())
console.log(A)

// judge 
console.log(A.every(Number.isInteger))
console.log(A.some(x => x > 4))

// flat
const C = [A, B]
if(typeof C.flat === 'function') console.log(C.flat())


if(typeof C.flatMap === 'function') console.log(C.flatMap(x => x + 1))

// other 
console.log(A.map(x => x + 1))
console.log(A)

console.log(A.reduce((l, x) => l +x, 0))
