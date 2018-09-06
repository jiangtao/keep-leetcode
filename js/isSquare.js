/**
```
is_square (-1) # => false
is_square   0 # => true
is_square   3 # => false
is_square   4 # => true
is_square  25 # => true
is_square  26 # => false
```
 */

//  为避免数字超过js安全范围，限制最大值
function isSquare(num) {
  if (typeof num !== 'number') throw new Error('num is invalid number')
  if(Number.isNaN(num)
    || num > Number.MAX_SAFE_INTEGER
    || num < 0
  ) return false

  return Number.isInteger(Math.sqrt(num))
}


console.assert(isSquare(-1) === false, '-1')
console.assert(isSquare(0) === true, ' 0')
console.assert(isSquare(3) === false, ' 3')
console.assert(isSquare(4) === true, ' 4')
console.assert(isSquare(25) === true, '25')
console.assert(isSquare(26) === false, '26')
console.assert(isSquare(NaN) === false, 'NaN')
console.assert(isSquare(Number.MAX_SAFE_INTEGER + 1) === false, 'max number')
console.assert(isSquare(-100) === false, '-100')
