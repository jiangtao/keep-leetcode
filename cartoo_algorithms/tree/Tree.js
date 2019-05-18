class Node {
  constructor(val, left, right, level = 0) {
    this.data = val
    this.left = left || null
    this.right = right || null
    this.level = level
  }
}
class Tree {
  constructor (root) {
    this._root = root
  }
  push(node, data, type = 'left') {
    node = node || this._root
    node[type] = new Node(data)
    return node[type]
  }

  push(node, type = 'left') {
    node = node || this._root
    delete node[type]
  }
}
// 一个稀疏的二叉树用数组来表示比较浪费空间
class TreeOfArray {
  constructor(root) {
    this._tree = []
    this._tree[0] = root
    root.level = 0
  }
  push(node, data, type = 'left') {
    node = node || this._root
    const indexes = {
      left: node.level * 2 + 2,
      right: node.level * 2 + 1
    }
    this._tree[indexes[type]] = new Node(data, null, null, indexes[type])
  }
} 

// 前端里面最常见的树, 比如 dom 节点
