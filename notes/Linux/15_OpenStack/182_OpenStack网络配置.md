# OpenStack网络配置
# 一、两个不通网段相互通信
1. 创建网段1网络



1. 设置网段ip



 

![img_512.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_512.png)

1. 如上方法创建网段2

![img_4032.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4032.jpeg)

1. 分别创建两个虚拟机连接不同网段



1. 分别查看主机ip地址
2. 创建路由器

![img_4128.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4128.png)

1. 路由器配置



![img_4304.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4304.png)



1. 查看拓扑图并ping验证



# 二、虚拟机连通外网
1. 创建网络



1. 编辑网络



 



 

![img_3744.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3744.png)

 



1. 将网络设置为网关

![img_2960.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2960.jpeg)

1. 查看验证



 

![img_2672.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2672.png)

# 三、外网连接虚拟机
1. 编辑安全组策略

![img_2080.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2080.png)

 



 

![img_4576.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4576.png)

1. 设置浮动ip



1. 绑定浮动ip

![img_2864.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2864.png)

1. 访问浮动ip验证



 



# 四、免密登录虚拟机
1. 远程机创建密钥

![img_1584.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1584.png)

 


