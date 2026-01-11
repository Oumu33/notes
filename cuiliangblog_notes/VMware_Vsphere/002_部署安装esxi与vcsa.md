# 部署安装esxi与vcsa

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:37:33+08:00
> 更新时间: 2026-01-11T08:59:03.868290+08:00
> 阅读量: 1410 | 点赞: 0

---

# 一、架构拓扑
+ ![](https://via.placeholder.com/800x600?text=Image+483ebf4412ef10a1)

# 二、esxi安装过程
    1. 下载ESXI6.5镜像和client客户端。
+ 将ISO写入到U盘或是刻录光盘然后启动安装。
    1. 开始安装，默认选择第一项，回车安装
+ ![](https://via.placeholder.com/800x600?text=Image+04de5227c1bc867f)
    1. 欢迎界面，回车，安装程序正在检测服务器硬件信息，如果不满足系统安装条件会跳出错误提示。检测完成之后会出现下面界面
+ ![](https://via.placeholder.com/800x600?text=Image+55cc7496df6e5f13)
+ ![](https://via.placeholder.com/800x600?text=Image+9744e8f16f14ac80)
    1. 安装在本地，这里列出了服务器硬盘信息，默认回车，出现下面界面
+ ![](https://via.placeholder.com/800x600?text=Image+f132eb9c71bb18a9)
    1. 设置登录密码，服务器root账户密码设置（注意：密码长度7位以上
+ ![](https://via.placeholder.com/800x600?text=Image+ec005e499804d3e7)
+ ![](https://via.placeholder.com/800x600?text=Image+c71c3b3c2a626737)
    1. 开始安装，按F11
+ ![](https://via.placeholder.com/800x600?text=Image+55422ccbcc717a01)
+ ![](https://via.placeholder.com/800x600?text=Image+eef4152b74cfffde)
    1. 重启
+ ![](https://via.placeholder.com/800x600?text=Image+1b4c550b57d90787)
+ ![](https://via.placeholder.com/800x600?text=Image+74dc06ec5402a060)
    1. 配置过程主要是配置网络，客户端可以登陆。以下是控制台主界面。
+ F2进入配置界面；F12关闭/重启系统，F2关闭确认键，F11重启确认键；Enter保存键，ESC取消键或退出键。
+ ![](https://via.placeholder.com/800x600?text=Image+c6ce31c26d834fb9)
+ ![](https://via.placeholder.com/800x600?text=Image+db2ceed7db997d11)
+ ![](https://via.placeholder.com/800x600?text=Image+8dbbecc944e4b73c)
    1. 浏览器登录web管理界面
+ ![](https://via.placeholder.com/800x600?text=Image+49f9c43813d78b5f)
+ ![](https://via.placeholder.com/800x600?text=Image+74e149c619dba09f)
+ ![](https://via.placeholder.com/800x600?text=Image+468d8f71cbca018e)
+ ![](https://via.placeholder.com/800x600?text=Image+a8a67675ff308a56)

# 三、vcsa安装
    1. 挂载镜像文件（如果是在物理机中可以使用软碟通将镜像写入U盘或光盘）
+ ![](https://via.placeholder.com/800x600?text=Image+30be6e9c4da2b975)
    1. 打开镜像文件， 选择“installer”打开安装程序
+ ![](https://via.placeholder.com/800x600?text=Image+d002fdddf6b2b7b2)
    1. 查看安装前的简介
+ ![](https://via.placeholder.com/800x600?text=Image+45defd7083c4486e)
    1. 选择需要进行的操作，由于我们本次安装是初次安装，所以选择“安装”
+ ![](https://via.placeholder.com/800x600?text=Image+cfbf8aa6b4f38129)
    1. 接受许可，点击“下一步”
+ ![](https://via.placeholder.com/800x600?text=Image+872c6228370c49ef)
    1. 如何整个集群不是很大的情况下，使用嵌入式“Platform       Services Controller”即可
+ ![](https://via.placeholder.com/800x600?text=Image+0fbc13c5814df49e)
    1. 输入ESXI主机的地址、端口号、用户名以及密码
+ ![](https://via.placeholder.com/800x600?text=Image+c3abf55ee06f99ba)
    1. 正在验证
+ ![](https://via.placeholder.com/800x600?text=Image+875011c46a155246)
    1. 提示警告，我们知道该证书是安全的，所以选择“是”
+ ![](https://via.placeholder.com/800x600?text=Image+4ef0baf68b4efd73)
    1. 输入虚拟机的密码（注：不是登录vCetner       Web界面的密码，是VCSA主机的密码）
+ ![](https://via.placeholder.com/800x600?text=Image+530cd988753d4605)
    1. 选择部署大小，请参考图片中的“部署大小所需资源”进行参考
+ ![](https://via.placeholder.com/800x600?text=Image+eb4b66d6fea0058e)
    1. 输入VCSA主机所用的网络、主机名、IP地址等信息，输入完成后点击“下一步”
+ ![](https://via.placeholder.com/800x600?text=Image+71d5aa3026ee30c8)
    1. 选择安装到ESXI主机中的哪个存储上，勾选图中的“启用精简磁盘模式”会实时占用磁盘空间，随着数据的增大，空间会占用的越来越多，如果不勾选则占用前方建议的全部空间，选择完成后点击“下一步”
+ ![](https://via.placeholder.com/800x600?text=Image+429fd6c68ce5fb7a)
    1. 确认安装信息，确认无误后点击“下一步”进行安装
+ ![](https://via.placeholder.com/800x600?text=Image+7b2dc31605c653c7)
    1. 正在安装中，耐心等待一会儿
+ ![](https://via.placeholder.com/800x600?text=Image+a8c48e1a0e216d86)
    1. 部署完成后是用来浏览器访问“[https://vcsa02.best.com:5480/](https://vcsa02.best.com:5480/)进行第二阶段的配置
+ ![](https://via.placeholder.com/800x600?text=Image+af073791500e1ba7)
    1. 查看完简介后点击“下一步”
+ ![](https://via.placeholder.com/800x600?text=Image+4140b681de83b8e0)
    1. 进行SSO配置，输入Single       Sign-On的域名，管理员密码以及站点名称，输入完成后点击“下一步”
+ ![](https://via.placeholder.com/800x600?text=Image+f1ff24b36dc3a1af)
    1. 设置时间同步以及是否启用SSH访问
+ ![](https://via.placeholder.com/800x600?text=Image+0a9fe57be98e77de)
    1. 确认主机信息，确认无误后点击“完成”
+ ![](https://via.placeholder.com/800x600?text=Image+9921024aac359c48)
+ ![](https://via.placeholder.com/800x600?text=Image+37f213f2d5ceabc1)
    1. 提示警告，如已确认填写信息无误，点击“确定”即可
+ ![](https://via.placeholder.com/800x600?text=Image+2a8c49dd08b73c74)
    1. 稍等片刻
+ ![](https://via.placeholder.com/800x600?text=Image+471c56335f8ec3ed)
    1. 使用浏览器访问“[https://vcsa02.best.com/vsphere-client/](https://vcsa02.best.com/vsphere-client/)”登录到我们刚刚搭建完成的Linux版本的vCenter       Server，会提示连接不安全，但是我们确认服务器是安全的，所以点击“高级”进行跳过（SSL证书的问题后面会有专文进行介绍以及配置，文档完成后会链接到此处）
+ ![](https://via.placeholder.com/800x600?text=Image+6ae7daad1ba75c43)
    1. 用于vCenter       Web需要用到Flush插件，所以点击途中标注的地方，启用插件（仅限谷歌、火狐等浏览器，部分浏览器需要下载并安装Flush插件）
+ ![](https://via.placeholder.com/800x600?text=Image+06943ef73c09d280)
    1. 谷歌浏览器点击“启用”即可
+ ![](https://via.placeholder.com/800x600?text=Image+5185e0b54f430b39)
    1. 输入Single       Singn-On的用户名密码即可登录到vCenter Server
+ ![](https://via.placeholder.com/800x600?text=Image+99a652f18ec5c20b)
    1. 登录成功
+ ![](https://via.placeholder.com/800x600?text=Image+00ee2e2b6b72609e)

# 四、添加主机以及存储
    1. 开始创建数据中心
+ ![](https://via.placeholder.com/800x600?text=Image+277b4e5ac6f9cca6)
    1. 创建数据中心
+ ![](https://via.placeholder.com/800x600?text=Image+761d30dcc8b6a867)
    1. 在这里先创建群集
+ ![](https://via.placeholder.com/800x600?text=Image+df782caaf01fa92a)
    1. 在弹出的页面输入群集名并根据需要开启相关特性
+ ![](https://via.placeholder.com/800x600?text=Image+c806906ba662b9ab)
    1. 添加主机
+ ![](https://via.placeholder.com/800x600?text=Image+58ab44610a209d2e)
    1. 添加主机名或IP地址
+ ![](https://via.placeholder.com/800x600?text=Image+2a6148aeee395f6a)
    1. 输入该ESXi的用户名和密码
+ ![](https://via.placeholder.com/800x600?text=Image+f030a9738817417d)
    1. 弹出安全警示确认后点击“是”并继续
+ ![](https://via.placeholder.com/800x600?text=Image+0c849019af323215)
    1. 在这里会显示主机摘要，由于是在VMware       Workstation中进行，所以供应商和型号都显示的是VMware
+ ![](https://via.placeholder.com/800x600?text=Image+70e7afd53039068b)
    1. 分配许可证
+ ![](https://via.placeholder.com/800x600?text=Image+731352dad9dae04f)
    1. 在这里选择默认就行
+ ![](https://via.placeholder.com/800x600?text=Image+881eab9b3fda7d38)
    1. 确认配置后点击完成即可添加
+ ![](https://via.placeholder.com/800x600?text=Image+28dbaff3524a6a3d)
    1. 该ESXi主机摘要显示如下
+ ![](https://via.placeholder.com/800x600?text=Image+4d850b95a9d7ff87)
    1. 在VCSA上给另一台ESXi添加存储，进入该主机的配置页，添加软件iSCSI适配器
+ ![](https://via.placeholder.com/800x600?text=Image+f433ecf62080d632)
    1. 弹出警示窗口，确认后点击“确定”即可
+ ![](https://via.placeholder.com/800x600?text=Image+2c2c43bd43d4cf0a)
    1. 添加后显示如下
+ ![](https://via.placeholder.com/800x600?text=Image+f2cb43ccf252a255)
    1. 添加iSCSI target
+ ![](https://via.placeholder.com/800x600?text=Image+2534e5ddad94b114)
    1. 在弹出的窗口中写入iSCSI存储服务器IP
+ ![](https://via.placeholder.com/800x600?text=Image+42826406498a015d)
    1. 查看存储设备是否已连接成功
+ ![](https://via.placeholder.com/800x600?text=Image+80422031611e5324)

# 五、虚拟化相关理论
    1. 虚拟化本质特点
    - 分区：每个虚拟机相互独立，互不影响
    - 隔离：各个虚拟机计算、存储、网络资源隔离，互不影响
    - 封装：每个虚拟机封装成vmfs独立的文件
    - 解耦：将硬件解耦，提高兼容性
+ ![](https://via.placeholder.com/800x600?text=Image+ee5840fa7829c5f6)
    2. vcenter server管理平台
+ ![](https://via.placeholder.com/800x600?text=Image+e6fe00a3e3a293a3)
    2. vcenter       client
+ ![](https://via.placeholder.com/800x600?text=Image+d02d07c053a420c6)


