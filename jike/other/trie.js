// 一般用来控件换时间
class Trie{
  constructor() {
    this.root = {}
  }

  static get end_of_word(){
    return '#'
  }

  insert(word) {
    var node = this.root
    for(let w of word) {
      if(!node[w]) node[w] = {}
      node = node[w]
    }
    node[Trie.end_of_word] = Trie.end_of_word
  }
  
  // 必须是一个词
  search(word) {
    let node = this.root
    for(let w of word) {
      if(!(w in node)) return false
      node = node[w]
    }
    return this.end_of_word in node
  }

  startsWith(word) {
    let node = this.root
    for(let w of word) {
      if(!(w in node)) return false
      node = node[w]
    }
    return true
  }

  print() {
    console.log(JSON.stringify(this.root, null, 2))
  }
}

module.exports = Trie
