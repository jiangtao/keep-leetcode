function swap (A, i, j ) {
  let t = A[j]
  A[j] = A[i]
  A[i] = t
} 
/**
 * 双边循环来做， 好理解
 * 双指针 left与小的比较找到最前面的大的， right找大的比较，肇东最后面的小的
 * @param {*} A 
 * @param {*} left 
 * @param {*} right 
 */
function partition (A, left, right) {
  let pivotIndex = left
  let pivot = A[left]
  while(left !== right) {
    while (left < right && A[right] > pivot) {
      right--
    }
    while(left < right && A[left] <= pivot) {
      left++
    }
    if (left < right) {
      swap(A, left, right)
    }
  }
  swap(A, pivotIndex, left)
  console.log(pivot, A)
  return left
}
function quickSort (A, left = 0, right = A.length - 1) {
  /**
   * 1. 挑选基准值：从数列中挑出一个元素，称为“基准”（pivot），
2. 分割：重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（与基准值相等的数可以到任何一边）。在这个分割结束之后，对基准值的排序就已经完成，
3. 递归排序子序列：递归地将小于基准值元素的子序列和大于基准值元素的子序列排序。
   */
  if (left < right) {
    const pivot = partition (A, left, right)
    quickSort(A, left, pivot - 1)
    quickSort(A, pivot + 1, right)
  }
  return A
}
/**
 * 这种比较好理解，找个基准(中间标记)， 大于标记的放在后面， 小于标记的放在前面
 * 这种写法，虽然很好理解， 但每次创建了两个数组， 空间复杂度 lgN * N， 因此比较推荐上面的原地排序
 * @param {*} A 
 */
function quickSort2(A) {
  if (A.length < 2) return A
  let pivotIndex = A.length >> 1
  let pivotValue = A.splice(pivotIndex, 1)[0]
  let left = [], right = []
  for(let i = 0; i < A.length; i++) {
    (A[i] > pivotValue ? right : left).push(A[i])
  }
  return quickSort2(left).concat(pivotValue, quickSort2(right))
 }
// console.log(quickSort2([3,5,10,5,1,16]))
// console.log(quickSort([3,5,10,5,1,16]))

// 快排: 取一个中间为小于它的左边。小于大于它的放在右边。然后，以此来不断的进行拆分，最后组成一个排序好的数组。
function qs(A) {
  if (A.length < 2) return A
  let pivotIndex = A.length >> 1
  let pivot = A.splice(pivotIndex, 1)[0]
  let left = [], right = []
  for(let i = 0; i < A.length; i++) {
    (A[i] > pivot ? right : left).push(A[i])
  }
  return qs(left).concat(pivot).concat(qs(right))
}

// console.log(qs([3,5,10,5,1,16]))


function qs2(A) {
  function _partition(A, left, right) {
    let p = left
    let pV = A[p]
    while(left !== right) {
      while(left < right && A[right] > pV) {
        right--
      }

      while(left < right && A[left] <= pV) {
        left++
      }
      if (left < right) {
        swap(A, left, right)
      }
    }
    swap(A,p,left)
    console.log(left, A)
    return left
  }
  function _qs (A, left = 0, right = A.length - 1) {
    if (left < right) {
      let pivotIndex = _partition(A, left, right)
      _qs(A, left, pivotIndex - 1)
      _qs(A, pivotIndex + 1, right)
    } 
  }
  _qs(A)
  return A
}
qs2([16, 3,5,10,5,1])
