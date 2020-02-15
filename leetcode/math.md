## leetcode的数学复习

### 二进制的运算

### 1323. 6 和 9 组成的最大数字

1. 数字可以用 % / 来很好的找到其索引


```javascript
var maximum69Number = function(num) {
  let index = -1
  let tmp = num, idx = 0
  while(tmp > 0) {
    if (tmp % 10 === 6) {
      index = idx
    }
    tmp = (tmp - tmp % 10) / 10 
    idx++
  }
   return idx >= 0 ? num + 3 * (10 ** idx) : num
}
```