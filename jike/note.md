## 整数的反转

数字的反转和字符串的反转, 类比

1. js里面没有置换条件，需要借助数组等来置换 (方法1)
2. 找规律

数字运算的效率大于字符串的效率

## 回文数 7

掌握 数字倒置的方法

1. % 运算可以最后一个的值
2. 每次递进的值 cur * 10 + cur % 10
3. 最终值 和原值相等 则说明过关

当然也可以用 字符串 字符串的内存占用会高一些

## strStr 28

1. 通过偏移量来计算位置 借助substr截取字符串
2. 截取字符串比较耗时