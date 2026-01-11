# Bash基本功能-多命令顺序执行与管道符
# 一、多命令顺序执行
| 多命令执行符 | 格式 | 作 用 |
| --- | --- | --- |
| ；  | 命令1 ；命令2 | 多个命令顺序执行，命令之间没有任何逻辑联系 |
| && | 命令1 && 命令2 | 逻辑与当命令1正确执行，则命令2才会执行当命令1执行不正确，则命令2不会执行 |
| ||  | 命令1 || 命令2 | 逻辑或当命令1 执行不正确，则命令2才会执行<br/>当命令1正确执行，则命令2不会执行 |


1. [root@localhost ~]#      dd if=输入文件 of=输出文件 bs=字节数 count=个数
2. 选项：

| if=输入文件 | 指定源文件或源设备 |
| --- | --- |
| of=输出文件 | 指定目标文件或目标设备 |
| bs=字节数 | 指定一次输入/输出多少字节，即把这些字节看做一个数据块 |
| count=个数 | 指定输入/输出多少个数据块 |


# 二、管道符
1. 命令格式：

[root@localhost ~]# 命令1 | 命令2

+ 命令1的正确输出作为命令2的操作对象

# 三、操作实例
1. ；多命令执行

![](https://via.placeholder.com/800x600?text=Image+22a096302f48f4e5)

1. &&多命令执行

![](https://via.placeholder.com/800x600?text=Image+1e0789fdc005ae11)

1. ||多命令执行

![](https://via.placeholder.com/800x600?text=Image+cf9e20dcfe9dd455)

1. 判断命令是否正确执行

![](https://via.placeholder.com/800x600?text=Image+8e0db733e5a195e6)

1. 创建100MB空文件

![](https://via.placeholder.com/800x600?text=Image+ef7706c88553920c)

1. 分屏显示命令输出结果

![](https://via.placeholder.com/800x600?text=Image+975c5bd2112f9c04)

 


