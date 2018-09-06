/**
 将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）

```js
squareDigits(9119) // 811181
```
 */


function squareDigits(number) {
  return Number(`${number}`.split('').map(n => n ** 2).join(''))
}

console.assert(squareDigits(9119) === 811181, '9119')
console.assert(squareDigits(0) === 0, '0')
console.assert(squareDigits(1) === 1, '1')
console.assert(squareDigits(21) === 41, '21')
console.assert(squareDigits(45) === 1625, '45')
