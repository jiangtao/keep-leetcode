// 计数排序适合分布比较均匀的排序
function coutSort(A) {
  const max = Math.max.apply(null, A)
  const min = Math.min.apply(null, A)
  const len = max - min + 1
  const L = new Array(len)
  let R = []
  // 统计数字出现的次数，避免造成不必要undefine的空间浪费， 存储 index (value - min)
  for(let i = 0; i < A.length; i++) {
    let v = A[i] - min
    L[v] >= 1 ? L[v]++ : (L[v] = 1)
  }
  // 利用数组的索引自带排序特性
  for(let i = 0; i < len; i++) {
    while(L[i]) {
      R.push(i + min)
      L[i]--
    }
  }
  return R
}

console.log(coutSort([1,2,12, 3,4,10,5,12,0]))
