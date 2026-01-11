# OpenStack网络配置
# 一、两个不通网段相互通信
1. 创建网段1网络

![](https://via.placeholder.com/800x600?text=Image+04b99c5edeaddbaa)

1. 设置网段ip

![](https://via.placeholder.com/800x600?text=Image+da7f9706cc324528)

 

![](https://via.placeholder.com/800x600?text=Image+b80a9088a4c4d099)

1. 如上方法创建网段2

![](https://via.placeholder.com/800x600?text=Image+bdb094cac83c710f)

1. 分别创建两个虚拟机连接不同网段

![](https://via.placeholder.com/800x600?text=Image+1b2de479f40c4a98)

1. 分别查看主机ip地址
2. 创建路由器

![](https://via.placeholder.com/800x600?text=Image+8c0d42452ad22d14)

1. 路由器配置

![](https://via.placeholder.com/800x600?text=Image+85fa045e99562989)

![](https://via.placeholder.com/800x600?text=Image+cad89eb8c40e6a96)

![](https://via.placeholder.com/800x600?text=Image+b5c8fda0c67f5c3b)

1. 查看拓扑图并ping验证

![](https://via.placeholder.com/800x600?text=Image+f9f4c59d4de127c5)

# 二、虚拟机连通外网
1. 创建网络

![](https://via.placeholder.com/800x600?text=Image+773875d25b44c727)

1. 编辑网络

![](https://via.placeholder.com/800x600?text=Image+6e31da3ccc1e4e0e)

 

![](https://via.placeholder.com/800x600?text=Image+c161eee6fa950b55)

 

![](https://via.placeholder.com/800x600?text=Image+d176c3458b60f622)

 

![](https://via.placeholder.com/800x600?text=Image+66896009a71c128e)

1. 将网络设置为网关

![](https://via.placeholder.com/800x600?text=Image+41396048da117606)

1. 查看验证

![](https://via.placeholder.com/800x600?text=Image+63bab8ffbe470c0c)

 

![](https://via.placeholder.com/800x600?text=Image+80f54598456c84e0)

# 三、外网连接虚拟机
1. 编辑安全组策略

![](https://via.placeholder.com/800x600?text=Image+9538592400dc2724)

 

![](https://via.placeholder.com/800x600?text=Image+4b40cba9311e9a5b)

 

![](https://via.placeholder.com/800x600?text=Image+4853a7737d2f96ff)

1. 设置浮动ip

![](https://via.placeholder.com/800x600?text=Image+fb4492780ec17551)

1. 绑定浮动ip

![](https://via.placeholder.com/800x600?text=Image+eb5e9df3d9c64ec9)

1. 访问浮动ip验证

![](https://via.placeholder.com/800x600?text=Image+4f03362159c0067a)

 

![](https://via.placeholder.com/800x600?text=Image+0e033e15302da72d)

# 四、免密登录虚拟机
1. 远程机创建密钥

![](https://via.placeholder.com/800x600?text=Image+ee2c8c514aff70b5)

 


