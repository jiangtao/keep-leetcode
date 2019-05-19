// 快速排序
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}
function quickSort(A, start = 0, end = A.length - 1) {
  if(start >= end) return
  var pivot = partion(A, start, end)
  quickSort(A, 0, pivot - 1)
  quickSort(A, pivot + 1, end)
  return A
}
function partion(A, start, end) {
  let pivot = A[start], mark = start
  for(let i = start + 1; i <= end; i++) {
    if(A[i] < pivot) {
      mark++
      console.log(mark)
      swap(A, mark, i)
    }
  }
  A[start] = A[mark]
  A[mark] = pivot
  return mark
}

console.log(quickSort([3,5,10,5,1,16]))
