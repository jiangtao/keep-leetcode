const A = [1,2,4,6,10,100,102]

function binarySearch (A, T) {
  let low = 0, high = A.length - 1
  while(low <= high) {
    let mid = (low + high) >> 1
    console.log(low, high, mid)
    if (A[mid] === T) return mid
    else if (A[mid] < T) {
      low = mid + 1
    } else {
      high = mid - 1
    }
   
  }
  return -1
}
console.log(binarySearch(A, 4))
