/** 
```
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```
 */

function accum(str) {
  if (typeof str !== 'string') throw new Error('str is invalid string')

  return str.split('').map((s, index) => {
    return `${s.toUpperCase()}${s.toLowerCase().repeat(index)}`
  }).join('-')
}

function accm2(str) {
  if (typeof str !== "string") throw new Error('传参须是一个字符串')
  const strArr1 = Array.from(str)
  return strArr1.map((char, idx) => (
    char.toLocaleUpperCase() + new Array(idx + 1).fill(char.toLocaleLowerCase()).join('')
  )).join("-")

}


console.log(accm("ABCDEFGHIJKLMN"))

console.assert(accum('abcd') === 'A-Bb-Ccc-Dddd',`accum('abcd')`)
console.assert(accum('RqaEzty') === 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy', `accum('RqaEzty')`)
console.assert(accum('cwAt') === 'C-Ww-Aaa-Tttt', `accum('cwAt')`)

