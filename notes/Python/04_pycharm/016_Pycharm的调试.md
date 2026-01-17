# Pycharm的调试
# 一、步骤：


1. 添加断点：单击代码行号后面的位置
2. 进入调试模式：点击 “甲壳虫”（似乎已经成了所有 IDE 调试模式的代号）（据说当年是一个蛾，die 到继电器中间，导致机器运行不了，所以叫 bug，调试叫 debug）
3. 选择想要的模式：进行逐步调试
4. 查看调试结果

![img_3072.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3072.jpeg)

![img_4640.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4640.png)****

# 二、单步调试 step into/step out/step over 区别
**step over**：单步执行时，在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完再停止，也就是把子函数整个作为一步。

在不存在子函数的情况下和 step into 效果一样的（简而言之，**越过子函数，但子函数会执行**）。

**step into**：单步执行时，遇到子函数就进入并且继续单步执行（简而言之，**进入子函数**）；

**step out**：当单步执行到子函数内时，用 step out 就可以执行完子函数余下部分，并返回到上一层函数。

1. step over 示例：  

2. step into 示例：



3. step out 示例：

![img_240.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_240.png)

# 三、调试时，查看日志
![img_1120.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1120.png)

1. Run to Cursor 示例：



2. F9 的作用：



# 四、其他
1. 查看所有断点

![img_3024.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3024.png)

2. 禁用所有断点




