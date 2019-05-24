let obj2 = {val: 2, next: null}
let obj3 = {val: 3, next: null}
let obj4 = {val: 4, next: null}
obj3.next = obj4
obj2.next = obj3
obj4.next = obj2
// 1 --> 2 --> 3 --> 4 --> 2
const ll = {
  head: {
    val: null,
    next: {
      val: 1,
      next: obj2
    }
  }
}
function hasCircle (L) {
  let n = L.head, m = L.head
  while(n && m) { 
    n = n.next
    m = m.next.next
    if(m === n) return true
  }
  return false
}

console.log(hasCircle(ll))
