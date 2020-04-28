function swap(A, i, j) {
  let t = A[i]
  A[i] = A[j]
  A[j] = t
}
function bubbleSort(A) {
  const len = A.length
  for(let i = 0; i < len; i++) {
    // 假定无序区已排序完， 若本次无序区已排序完，则代表排序已经完成，则退出比较
    let sorted = true
    for(let j = 0; j < len - i - 1;j++) {
      if (A[j] > A[j+1]) {
        swap(A, j, j + 1)
        sorted = false
      }
      count++

    }
    if (sorted) break
  }
  return A
}

console.log(bubbleSort2([ 10, 9, 8, 7, 6, 5]))


function bubbleSort2(A) {
  for(let i = 0; i < A.length; i++) {
    let sorted = true
    for(let j = 0; j < A.length - i - 1; j++) {
      if (A[j] > A[j+1]) {
        swap(A, j, j+1)
        sorted = false
      }
    }
    if (sorted) break
  }
  return A
}
