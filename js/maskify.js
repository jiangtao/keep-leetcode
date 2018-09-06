/**
```js
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
```
*/

function maskify(str) {
  if (typeof str !== 'string') throw new Error('str is invalid string')

  return str.slice(-4).padStart(str.length, '#')
}

// 扩展 手机号脱敏
function maskedPhone(phone) {
  const str = `${phone}`
  return str.slice(0, 3) + str.slice(-3).padStart(8, '*')
}


console.assert(maskify("4556364607935616") == "############5616", '4556364607935616')
console.assert(maskify("64607935616") == "#######5616", '    "64607935616')
console.assert(maskify("1") == "1", '              1')
console.assert(maskify("") == "", '               ""')
console.assert(maskify("Skippy") == "##ippy", 'Skippy')
console.assert(maskify("Nananananananananananananananana Batman!") == "####################################man!", 'Nananananananananananananananana Batman!')
