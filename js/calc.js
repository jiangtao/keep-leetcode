/**
 * 词法分析 (lexer analyse) ====> 令牌(tokens)
 * 语法分析 tokens => ast (抽象语法树)
 */

/**
 * 1 + 2 + 3 + 4 + 5
 * values: [1, 2, 3, 4, 5]
 * op: [+,+, +, +]
 * 
 * 2 * 3 + 1
 * 3 + 10 + 5 * 10 - 6
 * values: [2, 3, 1] [1, 3, 2]
 * op: [*, +] [+, *]
 * 
 * values: [3, 10, 5, 10, 6] [3, 10, 6, 5, 10 ]
 * op: [+, +, *, -] [+, +, -, *]
 */

function tokensToAst(tokens) {
  const priorities = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '(': 0,
    ')': 0
  }
  let i = 0
    , valueStack = []
    , opStack = []
    , token
    , selectValues
  while(i < tokens.length){
    token = tokens[i]
    if(Array.isArray(selectValues)) {
      selectValues.push(/\d+/.test(token) ? token * 1 : token)
      if(tokens[i+1] === ')') {
        valueStack.push(selectValues)
        selectValues = null
      }
      i++
      continue
    }
    if(token === '(') {
      selectValues = []
    } else if(token === ')') {

    } else if(priorities[token]) {
      opStack.push(token)
    } else {
      valueStack.push(/\d+/.test(token) ? token * 1 : token)
    }
    i++
  }
  i = 0
  while(i < opStack.length - 1) {
    if(priorities[opStack[i]] > priorities[opStack[i+1]]) {
      swap(opStack, i, i+1)
      swap(valueStack, i+1, i+2)
      swap(valueStack, i, i+1)
    }
    i++
  }
  return {
    op: opStack,
    value: valueStack
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function evaluate(tokens) {
  const { op, value } = tokensToAst(tokens)
  console.log(op, value)
  let operator
  while(operator = op.pop()) {
    let right = value.pop()
    let left = value.pop()
    if(Array.isArray(left)) left = evaluate(left)
    if(Array.isArray(right)) right = evaluate(right)
    switch(operator) {
      case '+':
        value.push(left + right)
        break;
      case '-':
        value.push(left - right)
        break
      case '*': 
        value.push(left * right)
        break
      case '/':
        value.push(left / right)
        break;
    }
  }
  return value[0]
}


function calc(str) {
  const tokens = str.match(/\d+|[\(\)\+\-\*\/]/g)
  return evaluate(tokens)
}

console.log(calc('1 + 2 + 3')) // 6
console.log(calc('1+2+3')) // 6
console.log(calc('1 + 2*3 + 3')) // 7
console.log(calc('(1+2)*3+4')) // 13
console.log(calc('1 + (1+2) / (4 - 1)+4')) // 6
