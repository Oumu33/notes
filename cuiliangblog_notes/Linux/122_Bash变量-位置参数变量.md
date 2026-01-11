# Bash变量-位置参数变量

> 来源: Linux
> 创建时间: 2021-02-16T10:00:46+08:00
> 更新时间: 2026-01-11T09:35:27.072314+08:00
> 阅读量: 688 | 点赞: 0

---

# 一、位置参数变量
| 位置参数变量  | 作 用 |
| --- | --- |
| $n | n为<font style="color:red;">数字</font>，$0代表命令本身，$1-$9代表第一到第九个参数，十以上的参数需要用大括号包含，如${10}. |
| $* | 这个变量代表命令行中<font style="color:red;">所有的参数</font>，$*把<font style="color:red;">所有的参数看成一个整体</font> |
| $@ | 这个变量也代表命令行中<font style="color:red;">所有的参数</font>，不过$@把<font style="color:red;">每个参数区分对待</font> |
| $# | 这个变量代表命令行中所有<font style="color:red;">参数的个数</font> |


1. 变量sum的和是$1加$2

![](https://via.placeholder.com/800x600?text=Image+107bbb71ec846477)

![](https://via.placeholder.com/800x600?text=Image+b7b9ee6f610e3e84)

1. 打印参数

![](https://via.placeholder.com/800x600?text=Image+0b3b03344152d7e8)

![](https://via.placeholder.com/800x600?text=Image+f81e31eb00157dcd)

1. $*与$@的区别

#!/bin/bash

for i in "$*"

#$*中的所有参数看成是一个整体，所以这个for循环只会循环一次

do

echo "The parameters is: $i"

done

x=1

for y in "$@"

#$@中的每个参数都看成是独立的，所以“$@”中有几个参数，就会循环几次

do

echo "The parameter$x is: $y"

x=$(( $x +1 ))

done

 


