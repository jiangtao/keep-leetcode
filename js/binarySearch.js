
/*
bsearch(A,5) // 1
bsearch(A,13) // 3
bsearch(A,4) // 1
bsearch(A,-1) // 0
bsearch(A,-10000) // 0
bsearch(A,30) // 6

0 1 3 5 7 9  (1 ===> low: 0, high 1)
0.5
*/

function bsearch(A, x, low = 0, high = A.length - 1) {
  let mid = Math.round((low + high) / 2)

  if (A[mid] === x) {
    return mid
  } else {
    if (x > A[mid]) {
      low = mid
    } else {
      high = mid
    }
    if (high - low <= 1) {
      if (x <= A[low]) return low
      if (x > A[low] && x <= A[high]) return high
      if (x > A[high]) return high + 1
    }
    return bsearch(A, x, low, high)
  }
}
const A = [3, 5, 7, 13, 22, 25]

console.assert(bsearch(A, 5) === 1, '5')
console.assert(bsearch(A, 13) === 3, '13')
console.assert(bsearch(A, 4) === 1, '4')
console.assert(bsearch(A, -1) === 0, '-1')
console.assert(bsearch(A, -10000) === 0, '-10000')
console.assert(bsearch(A, 30) === 6, '30')
console.assert(bsearch(A, 24) === 5, '24')
