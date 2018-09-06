/**
```
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
 */

function highAndLow(str) {
  if (typeof str !== 'string') throw new Error('str is invalid')
  const nums = str.split(/\s+/g)
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}

console.assert(highAndLow("1 2 3 4 5") === "5 1")
console.assert(highAndLow("1 2 -3 4 5") ===  "5 -3")
console.assert(highAndLow("1 9 3 4 -5") ===  "9 -5")
