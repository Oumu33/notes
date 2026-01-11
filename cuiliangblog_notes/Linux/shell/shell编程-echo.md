# shell编程-echo
# 一、显示普通字符串:
1. 这里的双引号完全可以省略，以下命令与上面实例效果一致：

![](../../images/img_2719.png)

# 二、显示转义字符
![](../../images/img_2720.png)

# 三、显示变量
read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量

![](../../images/img_2721.png)

name 接收标准输入的变量，结果将是:

![](../../images/img_2722.png)

# 四、显示换行
 -e 开启转义

![](../../images/img_2723.png)

# 五、显示不换行
-e 开启转义 \c 不换行

![](../../images/img_2724.png)

# 六、显示结果定向至文件
<font style="color:black;">echo </font><font style="color:#008800;">"It is a test" </font><font style="color:#666600;">></font><font style="color:black;">myfile</font>

# 七、原样输出字符串，不进行转义或取变量(用单引号)
<font style="color:black;">echo </font><font style="color:#008800;">'$name\"'</font>

输出结果：

$name\"

# 八、显示命令执行结果
<font style="color:black;">echo </font><font style="color:#008800;">`date`</font>

**注意：** 这里使用的是反引号 **`**, 而不是单引号 **'**。

结果将显示当前日期

<font style="color:#660066;">Thu Jul </font><font style="color:#006666;">24 10</font><font style="color:#666600;">:</font><font style="color:#006666;">08</font><font style="color:#666600;">:</font><font style="color:#006666;">46</font><font style="color:black;"> CST </font><font style="color:#006666;">2014</font>

 

来自 <[http://www.runoob.com/linux/linux-shell-echo.html](http://www.runoob.com/linux/linux-shell-echo.html)>

