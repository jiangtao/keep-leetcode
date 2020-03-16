function bucketSort (A, bucketLen = A.length) {
  const max = Math.max.apply(null, A)
  const min = Math.min.apply(null, A)
  const d = max - min
  const bucketList = Array.apply(null, {length: bucketLen}).map(_ => [])
  for(let i = 0; i < A.length; i++) {
    // 索引结果: idx = len * d / s 
    let idx = parseInt((A[i] - min) * (bucketLen - 1) / d)
    bucketList[idx].push(A[i])
  }
  console.table(bucketList)
  for(let i = 0; i < bucketLen; i++) {
    bucketList[i].sort((a, b) => a - b)
  }
  return bucketList.reduce((l, p) => (l = l.concat(p)), [])
}

console.log(bucketSort([1,2,5,19, 20, 9, 1, -1]))
