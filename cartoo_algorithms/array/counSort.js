// 计数排序适合分布比较均匀的排序
function coutSort(A) {
  var max = Math.max.apply(null, A)
  var min = Math.min.apply(null, A)
  var d = max - min + 1 
  var B = new Array(d)
  var result = []
  for(let i = 0; i < A.length; i++) {
    if(!B[A[i] - min]){
      B[A[i] - min] = 1
    } else {
      B[A[i] - min]++
    }
  }
  for(let i = 0; i < B.length; i++) {
    for(let j = 0; j < B[i]; j++) {
      result.push(i + min)
    }
  }
  return result
}

console.log(coutSort([1,2,12, 3,4,10,5,12,0]))
