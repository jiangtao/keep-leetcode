/**
```bash

                  1  
              3     5    
            7     9    11
        13    15    17    19
    21    23    25    27    29
31    33    35    37    39    41
```

```js
rowSumOddNumbers(1) // 1
rowSumOddNumbers(2) // 3+5=8
rowSumOddNumbers(3) // 7+9+11=27
rowSumOddNumbers(42) // 74088
```
n = 1 1
n = 2 8
n = 3 27
n = 4 64
n = 5 125
n = 6 216

*/


function rowSumOddNumbers(n) {
  return n ** 3
}

console.assert(rowSumOddNumbers(1) === 1)
console.assert(rowSumOddNumbers(2) === 8)
console.assert(rowSumOddNumbers(3) === 27)
console.assert(rowSumOddNumbers(4) === 64)
console.assert(rowSumOddNumbers(5) === 125)
console.assert(rowSumOddNumbers(6) === 216)
console.assert(rowSumOddNumbers(42) === 74088)
