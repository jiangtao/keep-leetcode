// 冒泡排序: 交换排序, 相邻元素对比交换, 左边的大于右边则交换
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}
function bubbleSort(A) {
  for(let i = 0; i < A.length - 1; i++) {
    let sorted = true
    for(let j = 0; j < A.length - i - 1; j++) {
      if(A[j] > A[j + 1]) {
        swap(A, j, j+1)
        sorted = false
      }
    }
    if(sorted) break
  }
  return A
}

console.log(bubbleSort([1,2,5, 0, -1,3,10, 11, 13,15, 20]))
