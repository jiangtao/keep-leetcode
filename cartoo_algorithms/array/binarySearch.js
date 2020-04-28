// 二分查找: 以中位为分割, T 在右边,则高位往低位靠
// 1,2,3,10, 4,6,10, 10
function binarySearch (A, T, low = 0, high = A.length - 1){
  let mid = (low + high) >> 1
  if (low > high) return -1
  if (A[mid] > T) return binarySearch(A, T, low, mid - 1)
  if (A[mid] < T) return binarySearch(A, T, mid + 1, high)
  return mid
}

let result = []
function binarySearch2(A, T) {
  let low = 0, high = A.length - 1
  while(low <= high) {
    let mid = (low + high) >> 1
    if (A[mid] > T) {
      high = mid - 1
    } else if (A[mid] < T) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
console.log(binarySearch2([1,2,3, 4,5, 6, 10], 1))
