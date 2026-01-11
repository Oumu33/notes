# OpenStack网络配置
# 一、两个不通网段相互通信
1. 创建网段1网络

![](../../images/img_2483.png)

1. 设置网段ip

![](../../images/img_2484.png)

 

![](../../images/img_2485.png)

1. 如上方法创建网段2

![](../../images/img_2486.png)

1. 分别创建两个虚拟机连接不同网段

![](../../images/img_2487.png)

1. 分别查看主机ip地址
2. 创建路由器

![](../../images/img_2488.png)

1. 路由器配置

![](../../images/img_2489.png)

![](../../images/img_2490.png)

![](../../images/img_2491.png)

1. 查看拓扑图并ping验证

![](../../images/img_2492.png)

# 二、虚拟机连通外网
1. 创建网络

![](../../images/img_2493.png)

1. 编辑网络

![](../../images/img_2494.png)

 

![](../../images/img_2495.png)

 

![](../../images/img_2496.png)

 

![](../../images/img_2497.png)

1. 将网络设置为网关

![](../../images/img_2498.png)

1. 查看验证

![](../../images/img_2499.png)

 

![](../../images/img_2500.png)

# 三、外网连接虚拟机
1. 编辑安全组策略

![](../../images/img_2501.png)

 

![](../../images/img_2502.png)

 

![](../../images/img_2503.png)

1. 设置浮动ip

![](../../images/img_2504.png)

1. 绑定浮动ip

![](../../images/img_2505.png)

1. 访问浮动ip验证

![](../../images/img_2506.png)

 

![](../../images/img_2507.png)

# 四、免密登录虚拟机
1. 远程机创建密钥

![](../../images/img_2508.png)

 

