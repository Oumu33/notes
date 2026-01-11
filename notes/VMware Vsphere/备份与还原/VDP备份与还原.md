# VDP备份与还原
+ ![](../../images/img_4289.png)

# 一、域控DNS服务器安装
    1. 打开服务器管理器，添加角色和功能。出现“添加角色和功能”界面，下一步  。
+ ![](../../images/img_4290.png)
    1. 根据提示操作，下一步。
+ ![](../../images/img_4291.png)
    1. 根据提示操作，下一步。
+ ![](../../images/img_4292.png)
    1. 根据提示操作，下一步。
+ ![](../../images/img_4293.png)
    1. 选择添加AD域服务（Active Directory       域服务），同时添加所需功能。
+ ![](../../images/img_4294.png)
    1. 根据提示操作，下一步 
+ ![](../../images/img_4295.png)
    1. 点击服务器管理器左侧“AD DS”       、点击黄色提示部分中的更多。
+ ![](../../images/img_4296.png)
    1. 点击“将此服务器升级为域控制器” 。
+ ![](../../images/img_4297.png)
    1. 进入AD域服务器配置向导，选择 “添加新林”       ，输入域，点击下一步。
+ ![](../../images/img_4298.png)
    1. 填写密码，下一步 。
+ ![](../../images/img_4299.png)
    1. 提示DNS无法创建，不用管，继续下一步 。
+ ![](../../images/img_4300.png)
    1. 安装路径，默认，下一步 。
+ ![](../../images/img_4301.png)
    1. 查看选项，默认，下一步 。
+ ![](../../images/img_4302.png)
    1. 点击安装       。此过程可能会报错，提示登陆用户没有设置密码，去设置给当前登陆用户（Administrator）设置一个密码，然后回来点击       “重新运行先决条件检查” 即可！
+ ![](../../images/img_4303.png)
    1. 安装完成，会提示注销重启 （此过程比较漫长，耐心等待）。
+ ![](../../images/img_4304.png)

# 二、DNS服务配置
    1. 打开服务器管理器，点击添加角色和功能
+ ![](../../images/img_4305.png)
    1. 一直下一步，选择基于角色或基于功能的安装
+ ![](../../images/img_4306.png)
    1. 选择目标服务器，只有一台
+ ![](../../images/img_4307.png)
    1. 添加DNS服务器
+ ![](../../images/img_4308.png)
    1. 一直下一步直到安装成功
+ ![](../../images/img_4309.png)
    1. .安装DNS服务器成功后可以发现多了个DNS服务器
+ ![](../../images/img_4310.png)
    1. 启动DNS管理器并新建正向查找区域
+ ![](../../images/img_4311.png)
    1. 一直下一步到输入区域名称
+ ![](../../images/img_4312.png)
    1. 新建主机
+ ![](../../images/img_4313.png)
    1. 反向查找，新建区域
+ ![](../../images/img_4314.png)
    1. 添加解析记录
+ ![](../../images/img_4315.png)

# 三、VDP安装
    1. 官网下载VDP的ova模板文件
+ ![](../../images/img_4316.png)
    1. 登陆vCenter部署OVF模板
+ ![](../../images/img_4317.png)
+  
    1. 配置网络
+ ![](../../images/img_4318.png)
    1. 开启虚拟机电源
+ ![](../../images/img_4319.png)
    1. 使用浏览器登陆配置
+ [https://IP:8543/vdp-configure](https://IP:8543/vdp-configure) 默认密码：changeme
+ ![](../../images/img_4320.png)
+ ![](../../images/img_4321.png)
+ ![](../../images/img_4322.png)
+ ![](../../images/img_4323.png)
+ ![](../../images/img_4324.png)
+ ![](../../images/img_4325.png)
    1. 进入管理界面查看状态
+ ![](../../images/img_4326.png)
    1. 登录vcenter——主页——VDP
+ ![](../../images/img_4327.png)

# 四、添加VDP备份存储
    1. 配置——存储适配器——添加iscsi适配器
+ ![](../../images/img_4328.png)
    1. 目标——动态发现——添加
+ ![](../../images/img_4329.png)
    1. 填写备份存储ip地址
+ ![](../../images/img_4330.png)
    1. 存储——数据存储——添加数据存储
+ ![](../../images/img_4331.png)
    1. 进入vdp配置，查看存储是否挂载
+ ![](../../images/img_4332.png)
    1. 修改默认存储，扩展存储
+ ![](../../images/img_4333.png)
+ ![](../../images/img_4334.png)

# 五、虚拟机备份
    1. 进入vcenter——主页——VDP
+ ![](../../images/img_4335.png)
    1. 点击连接
+ ![](../../images/img_4336.png)
    1. 进入VDP管理页面
+ ![](../../images/img_4337.png)
    1. VDP备份——新建备份作业
+ ![](../../images/img_4338.png)
    1. 配置备份策略
+ ![](../../images/img_4339.png)
    1. 选择备份作业——立即备份
+ ![](../../images/img_4340.png)
    1. 另一种方式，主机集群——虚拟机——所有VDP操作
+ ![](../../images/img_4341.png)

# 六、虚拟机恢复
    1. VDP——恢复——选中备份项目
+ ![](../../images/img_4342.png)
    1. 点击恢复
+ ![](../../images/img_4343.png)
    1. 或者选中虚拟机，点所有VDP操作——恢复
+ ![](../../images/img_4344.png)
    1. 选中恢复设置
+ ![](../../images/img_4345.png)
+  

