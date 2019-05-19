// 二分查找: 以中位为分割, T 在右边,则高位往低位靠
function binarySearch(A, T) {
  let low = 0, high = A.length - 1, mid, result = []
  while(low <= high) {
    mid = parseInt((low + high) / 2)
    if(A[mid] === T) {
      result.push(mid)
      low = mid + 1
      continue
    }
    if(A[mid] > T) high = mid - 1
    if(A[mid] < T) low = mid + 1
  }
  return result.length ? result : -1
}

function binarySearch2(A, T, low = 0, high = A.length - 1) {
  let mid = parseInt((low + high) / 2)
  if(low > high) return -1
  if(A[mid] > T) return binarySearch2(A, T, low, mid - 1)
  if(A[mid] < T) return binarySearch2(A, T, mid + 1, high)
  return mid
}

console.log(binarySearch([1,2,3,10, 4,6,10, 10], 10))
