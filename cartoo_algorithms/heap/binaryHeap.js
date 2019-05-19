// 把树的运行时序图画出来, 就比较好理解

/**
 * 用于插入节点的时候 上浮
 */
function upMaxAdjust(heap) {
  let childIndex = heap.length - 1;
  let parentIndex = parseInt((childIndex - 1) / 2);
  while (childIndex > 0 && parentIndex >= 0 && heap[childIndex] > heap[parentIndex]) {
    swap(heap, parentIndex, childIndex);
    childIndex = parentIndex;
    parentIndex = parseInt((childIndex - 1) / 2);
  }
}

/**
 * 针对一组子树的自我调整
 */
function downAdjustMinHeap(heap, parentIndex, len) {
  var childIndex = 2 * parentIndex
  while(childIndex < len) {
    if(childIndex + 1 < len && heap[childIndex + 1] < heap[childIndex]) childIndex++
    if(heap[parentIndex] <= heap[childIndex]) break
    swap(heap, parentIndex, childIndex)
    parentIndex = childIndex
    childIndex = 2 * parentIndex + 1
  }
}

function downAdjustMaxHeap(heap, parentIndex, len) {
  var childIndex = parentIndex * 2 + 1;
  while (childIndex < len) {
    if (childIndex + 1 < len && heap[childIndex + 1] > heap[childIndex])
      childIndex++;
    if (heap[parentIndex] >= heap[childIndex]) break;
    swap(heap, parentIndex, childIndex);
    parentIndex = childIndex;
    childIndex = 2 * parentIndex + 1;
  }
}

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]];
}
/**
 * @description 构建最小堆
 * @param {*} heap 表示二叉树的数组
 */
function buildMinHeap(heap) {
  for (let i = parseInt((heap.length - 2) / 2); i >= 0; i--) {
    downAdjustMinHeap(heap, i, heap.length);
  }
  return heap;
}
/**
 * @description 构建最大堆
 * @param {*} heap 表示二叉树的数组
 */
function buildMaxHeap(heap) {
  for (let i = parseInt((heap.length - 2) / 2); i >= 0; i--) {
    downAdjustMaxHeap(heap, i, heap.length);
  }
  return heap;
}
// nlogN
function sort(heap) {
  buildMaxHeap(heap); // o(n)
  for (let i = heap.length - 1; i > 0; i--) {
    swap(heap, 0, i); // o(1)
    downAdjustMaxHeap(heap, 0, i); // logn
  }
  return heap;
}
// nlogN
function sortMax(heap) {
  buildMinHeap(heap); // o(n)
  for (let i = heap.length - 1; i > 0; i--) {
    swap(heap, 0, i); // o(1)
    downAdjustMinHeap(heap, 0, i); // logn
  }
  return heap;
}

// console.log(build([7,3,5,4,9,8,9]))
console.log(sort([7, 3, 5, 4, 9, 8, 9]));
console.log(sortMax([7, 3, 5, 4, 9, 8, 9]));

exports.buildMaxHeap = buildMaxHeap
exports.upMaxAdjust = upMaxAdjust
exports.downAdjustMaxHeap = downAdjustMaxHeap
exports.swap = swap
