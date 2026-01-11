# Pycharm的调试

> 来源: Python
> 创建时间: 2021-02-21T19:12:54+08:00
> 更新时间: 2026-01-11T09:25:23.669863+08:00
> 阅读量: 737 | 点赞: 0

---

# 一、步骤：


1. 添加断点：单击代码行号后面的位置
2. 进入调试模式：点击 “甲壳虫”（似乎已经成了所有 IDE 调试模式的代号）（据说当年是一个蛾，die 到继电器中间，导致机器运行不了，所以叫 bug，调试叫 debug）
3. 选择想要的模式：进行逐步调试
4. 查看调试结果

![](https://via.placeholder.com/800x600?text=Image+74ba87ae952f8b21)

![](https://via.placeholder.com/800x600?text=Image+45a5026910959055)****

# 二、单步调试 step into/step out/step over 区别
**step over**：单步执行时，在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完再停止，也就是把子函数整个作为一步。

在不存在子函数的情况下和 step into 效果一样的（简而言之，**越过子函数，但子函数会执行**）。

**step into**：单步执行时，遇到子函数就进入并且继续单步执行（简而言之，**进入子函数**）；

**step out**：当单步执行到子函数内时，用 step out 就可以执行完子函数余下部分，并返回到上一层函数。

1. step over 示例：  
![](https://via.placeholder.com/800x600?text=Image+872b38905d8226d2)
2. step into 示例：

![](https://via.placeholder.com/800x600?text=Image+151a2c698e4a4e19)

3. step out 示例：

![](https://via.placeholder.com/800x600?text=Image+5186385176219928)

# 三、调试时，查看日志
![](https://via.placeholder.com/800x600?text=Image+a06f29d5555ca5a2)

1. Run to Cursor 示例：

![](https://via.placeholder.com/800x600?text=Image+624c9efa0dafa66f)

2. F9 的作用：

![](https://via.placeholder.com/800x600?text=Image+4ed07043638afa18)

# 四、其他
1. 查看所有断点

![](https://via.placeholder.com/800x600?text=Image+fa4b168d6402de29)

2. 禁用所有断点

![](https://via.placeholder.com/800x600?text=Image+7545b725ffd2b22f)


