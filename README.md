one algorithm, one day (每天一小步, 回首大进步. 一天刷一题，防老防痴呆)

从 19 年 5 月 27 日起, 将进行系列问题学习和总结. 每周题目来自 leetcode, 每周围绕一个话题来, 学会分析一类问题. (周六/日, 节假日不出题, 用来回顾和学习之用)

如果觉得有用，欢迎star, fork贡献相关的题. 在 issue 中交流。有找工作和招聘需求的技术可以来[内推群](https://github.com/neitui/jobs)

---

- [漫画算法javascript实现](./cartoo_algorithms)

> 注：以下题目来源于 网络，leetcode，codewars 等，目前以 javascript 为主。欢迎大家一块来搞~，时刻提升自己，保证一份竞争力!

## 题目

### 1. 2018-08-13

观察下面的规律，写一个函数`accum`

```
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```

[js answer](./js/accum.js)

### 2. 2018-08-14

写一个函数求数组的最大值和最小值

```
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

[js answer](./js/highAndLow.js)

### 3. 2018-08-15

写一个函数判断字符串中 x 的数量和 o 的数量是否相等（忽略大小写）：

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // 没有x也没有o，所有相等，都为0
XO("zzoo") => false
```

[js answer](./js/XO.js)

### 4. 2018-08-16

写一个函数判断一个数字是不是某个整数的平方。

```js
is_square (-1) # => false
is_square   0 # => true
is_square   3 # => false
is_square   4 # => true
is_square  25 # => true
is_square  26 # => false
```

[js answer](./js/isSquare.js)

### 5. 2018-08-17

写一个函数，将字符串除了最后的四位，其他都变成#

```js
maskify("4556364607935616") == "############5616";
maskify("64607935616") == "#######5616";
maskify("1") == "1";
maskify("") == "";

// "What was the name of your first pet?"
maskify("Skippy") == "##ippy";
maskify("Nananananananananananananananana Batman!") ==
  "####################################man!";
```

[js answer](./js/maskify.js)

### 6. 2018-08-18

下面三角形的数列：

```bash

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
```

写一个函数，给定行的序号，然后求和：

```js
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3+5=8
rowSumOddNumbers(3); // 7+9+11=27
rowSumOddNumbers(42); // 74088
```

[js answer](./js/rowSumOddNumbers.js)

### 7. 2018-08-19

将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）

```js
squareDigits(9119); // 811181
```

[js answer](./js/squareDigits.js)

### 8. 2018-08-20 ★

写一个函数 solution，求比一个数字 n 小的所有 3 或 5 的整数的倍数和。

比如 10，比它小的 3、5 整数倍数有： 3,5,6,9， 所以和为 23。 比如 16， 比它小的 3，5 整数倍数有： 3,5,6,9,10,12,15，所以和为 60（15 只计算 1 次）

示例

solution(10) // 23
solution(16) // 60
注意，如果输入负数，返回 0

[js answer](./js/summary.js)

### 9. 2018-08-21

写一个二分查找函数 bsearch，和之前学习的二分查找函数有一定的变化。

```js
function bsearch(A, x) {
  /// TODO
}
```

A 是一个已排序的数组，x 是目标值。

如果找到目标值，返回目标值在数组中的序号。
如果没有找到目标值，返回目标值应该被插入的位置
比如数组: A=3,5,7,13,22,25

```js
bsearch(A, 5); // 1
bsearch(A, 13); // 3
bsearch(A, 4); // 1
bsearch(A, -1); // 0
bsearch(A, -10000); // 0
bsearch(A, 30); // 6
```

[js answer](./js/binarySearch.js)

### 10. 2018-08-22

在一个数组中大部分都是奇数(或偶数），只有 1 个可能是偶数（或奇数），写一个函数`special`找到这个不一样的值。

```javascript
special([2, 4, 0, 100, 4, 11, 2602, 36]); // 11 唯一的奇数

special([160, 3, 1719, 19, 11, 13, -21]); // 160 唯一的偶数
```

[js answer](./js/special.js)

### 11. 2019-02-25

有一个数组，实现 rotate 翻转操作

```javascript
rotate([6, 7, 8, 1, 2, 3, 4]); // [4,3,2,1,8,7,6]
```

[js answer](./js/rotate.js)

---- 
### 12. 2019-05-24

有一个单向链表 L, 判定 L 中有环 

```javascript
hasCircle(L); // true
```

[js answer](./js/hasCircle.js)

### 2019年 5 月 27 日-2019 年 5 月31 日 (Top K)

本周题目围绕 `Top K` 问题, 目的掌握 `Top K`相关的问题.

#### 13. 2019-05-27

给定一个长度为 L的数组 A, A 里面都是数字, 求前 K 个最大数. [issue](https://github.com/jiangtao/one-algorithm/issues/1)

```javascript
findMaxNumbers(A, K); // [5,6,8,10,1,2,3,4] 3 结果为 [10, 8, 6]
```

#### 14. 2019-05-28

在上面一道题目中, 可以实现 min stack做 **top K** 的处理. 

实现一个 Min Stack, leetcode 题目[155. Min Stack](https://leetcode.com/problems/min-stack/) [issue](https://github.com/jiangtao/one-algorithm/issues/2)

#### 15. 2019-05-29

计算出爬楼的最小成本 leetcode 题目[746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) [issue](https://github.com/jiangtao/one-algorithm/issues/3)

相关题目: [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

#### 16. 2019-05-30

[692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) [issue](https://github.com/jiangtao/one-algorithm/issues/4)

