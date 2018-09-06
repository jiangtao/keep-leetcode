/**
```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true 
XO("zzoo") => false
// 没有x也没有o，所有相等，都为0
```
 */

// 正则匹配
function XO(str, a = 'o', b = 'x') {
  if (typeof str !== 'string') throw new Error('str is invalid string')

  return (str.match(new RegExp(a, 'gi')) || []).length === (str.match(new RegExp(b, 'gi')) || []).length
}

// 计数
function XO2(str, a = 'o', b = 'x') {
  if (typeof str !== 'string') throw new Error('str is invalid string')
  const result = {[a]: 1,[b]: 1}
  for(let s of str) result[s.toLowerCase()] && result[s.toLowerCase()]++
  return result[a] === result[b]
}

console.assert(XO("ooxx") ===  true, 'XO: ooxx')
console.assert(XO("xooxx") === false, 'XO: xooxx')
console.assert(XO("ooxXm") ===  true, 'XO: ooxXm')
console.assert(XO("zpzpzpp") === true, 'XO: zpzpzpp' )
console.assert(XO("zzoo") === false, 'XO: zzoo')

console.assert(XO2("ooxx") ===  true, 'XO2: ooxx')
console.assert(XO2("xooxx") === false, 'XO2: xooxx')
console.assert(XO2("ooxXm") ===  true, 'XO2: ooxXm')
console.assert(XO2("zpzpzpp") === true, 'XO2: zpzpzpp' )
console.assert(XO2("zzoo") === false, 'XO2: zzoo')

