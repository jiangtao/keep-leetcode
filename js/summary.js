/**
 写一个函数solution，求比一个数字n小的所有3或5的整数的倍数和。

比如10，比它小的3、5整数倍数有： 3,5,6,9， 所以和为23。 比如16， 比它小的3，5整数倍数有： 3,5,6,9,10,12,15，所以和为60（15只计算1次）

示例

solution(10) // 23
solution(16) // 60
注意，如果输入负数，返回0
 */

function solution(n, a = 3, b = 5) {
  if (n < 0) return 0
  let i = -1, total = 0
  while (++i < n) {
    if (i % a == 0 || i % b === 0) total += i
  }
  return total
}
/**
 * 利用等差数列求解，不管是a, b 是任意大于 0 且 a != b
 * 所以题目可以换成： 求所有小于n的 以a为公差 项数是 Math.floor(n - 1 / a)的和 + 所有小于n的 以b为公差 项数是 Math.floor(n / a)的和 - a *b 为公差的和
 * 公式为： S = Sa + Sb - Sa*b
 * @param {*} n 
 * @param {*} a 
 * @param {*} b 
 */
function solution2(n, a = 3, b = 5) {
  const countA = Math.floor((n - 1) / a)
  const countB = Math.floor((n - 1) / b)
  const countAB = Math.floor(((n - 1)) / (a * b))
  return countA * (1 + countA) * a / 2
    + countB * (1 + countB) * b / 2
    - countAB * (1 + countAB) * (a * b) / 2
}
console.assert(solution(4) === 3, '4')
console.assert(solution(10) === 23, '10')
console.assert(solution(16) === 60, '16')


console.assert(solution2(4) === 3, 'solution2 4')
console.assert(solution2(10) === 23, 'solution2 10')
console.assert(solution2(16) === 60, 'solution2 16')
