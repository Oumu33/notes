# 部署安装esxi与vcsa
# 一、架构拓扑
+ ![](../../images/img_4476.png)

# 二、esxi安装过程
    1. 下载ESXI6.5镜像和client客户端。
+ 将ISO写入到U盘或是刻录光盘然后启动安装。
    1. 开始安装，默认选择第一项，回车安装
+ ![](../../images/img_4477.png)
    1. 欢迎界面，回车，安装程序正在检测服务器硬件信息，如果不满足系统安装条件会跳出错误提示。检测完成之后会出现下面界面
+ ![](../../images/img_4478.png)
+ ![](../../images/img_4479.png)
    1. 安装在本地，这里列出了服务器硬盘信息，默认回车，出现下面界面
+ ![](../../images/img_4480.png)
    1. 设置登录密码，服务器root账户密码设置（注意：密码长度7位以上
+ ![](../../images/img_4481.png)
+ ![](../../images/img_4482.png)
    1. 开始安装，按F11
+ ![](../../images/img_4483.png)
+ ![](../../images/img_4484.png)
    1. 重启
+ ![](../../images/img_4485.png)
+ ![](../../images/img_4486.png)
    1. 配置过程主要是配置网络，客户端可以登陆。以下是控制台主界面。
+ F2进入配置界面；F12关闭/重启系统，F2关闭确认键，F11重启确认键；Enter保存键，ESC取消键或退出键。
+ ![](../../images/img_4487.png)
+ ![](../../images/img_4488.png)
+ ![](../../images/img_4489.png)
    1. 浏览器登录web管理界面
+ ![](../../images/img_4490.png)
+ ![](../../images/img_4491.png)
+ ![](../../images/img_4492.png)
+ ![](../../images/img_4493.png)

# 三、vcsa安装
    1. 挂载镜像文件（如果是在物理机中可以使用软碟通将镜像写入U盘或光盘）
+ ![](../../images/img_4494.png)
    1. 打开镜像文件， 选择“installer”打开安装程序
+ ![](../../images/img_4495.png)
    1. 查看安装前的简介
+ ![](../../images/img_4496.png)
    1. 选择需要进行的操作，由于我们本次安装是初次安装，所以选择“安装”
+ ![](../../images/img_4497.png)
    1. 接受许可，点击“下一步”
+ ![](../../images/img_4498.png)
    1. 如何整个集群不是很大的情况下，使用嵌入式“Platform       Services Controller”即可
+ ![](../../images/img_4499.png)
    1. 输入ESXI主机的地址、端口号、用户名以及密码
+ ![](../../images/img_4500.png)
    1. 正在验证
+ ![](../../images/img_4501.png)
    1. 提示警告，我们知道该证书是安全的，所以选择“是”
+ ![](../../images/img_4502.png)
    1. 输入虚拟机的密码（注：不是登录vCetner       Web界面的密码，是VCSA主机的密码）
+ ![](../../images/img_4503.png)
    1. 选择部署大小，请参考图片中的“部署大小所需资源”进行参考
+ ![](../../images/img_4504.png)
    1. 输入VCSA主机所用的网络、主机名、IP地址等信息，输入完成后点击“下一步”
+ ![](../../images/img_4505.png)
    1. 选择安装到ESXI主机中的哪个存储上，勾选图中的“启用精简磁盘模式”会实时占用磁盘空间，随着数据的增大，空间会占用的越来越多，如果不勾选则占用前方建议的全部空间，选择完成后点击“下一步”
+ ![](../../images/img_4506.png)
    1. 确认安装信息，确认无误后点击“下一步”进行安装
+ ![](../../images/img_4507.png)
    1. 正在安装中，耐心等待一会儿
+ ![](../../images/img_4508.png)
    1. 部署完成后是用来浏览器访问“[https://vcsa02.best.com:5480/](https://vcsa02.best.com:5480/)进行第二阶段的配置
+ ![](../../images/img_4509.png)
    1. 查看完简介后点击“下一步”
+ ![](../../images/img_4510.png)
    1. 进行SSO配置，输入Single       Sign-On的域名，管理员密码以及站点名称，输入完成后点击“下一步”
+ ![](../../images/img_4511.png)
    1. 设置时间同步以及是否启用SSH访问
+ ![](../../images/img_4512.png)
    1. 确认主机信息，确认无误后点击“完成”
+ ![](../../images/img_4513.png)
+ ![](../../images/img_4514.png)
    1. 提示警告，如已确认填写信息无误，点击“确定”即可
+ ![](../../images/img_4515.png)
    1. 稍等片刻
+ ![](../../images/img_4516.png)
    1. 使用浏览器访问“[https://vcsa02.best.com/vsphere-client/](https://vcsa02.best.com/vsphere-client/)”登录到我们刚刚搭建完成的Linux版本的vCenter       Server，会提示连接不安全，但是我们确认服务器是安全的，所以点击“高级”进行跳过（SSL证书的问题后面会有专文进行介绍以及配置，文档完成后会链接到此处）
+ ![](../../images/img_4517.png)
    1. 用于vCenter       Web需要用到Flush插件，所以点击途中标注的地方，启用插件（仅限谷歌、火狐等浏览器，部分浏览器需要下载并安装Flush插件）
+ ![](../../images/img_4518.png)
    1. 谷歌浏览器点击“启用”即可
+ ![](../../images/img_4519.png)
    1. 输入Single       Singn-On的用户名密码即可登录到vCenter Server
+ ![](../../images/img_4520.png)
    1. 登录成功
+ ![](../../images/img_4521.png)

# 四、添加主机以及存储
    1. 开始创建数据中心
+ ![](../../images/img_4522.png)
    1. 创建数据中心
+ ![](../../images/img_4523.png)
    1. 在这里先创建群集
+ ![](../../images/img_4524.png)
    1. 在弹出的页面输入群集名并根据需要开启相关特性
+ ![](../../images/img_4525.png)
    1. 添加主机
+ ![](../../images/img_4526.png)
    1. 添加主机名或IP地址
+ ![](../../images/img_4527.png)
    1. 输入该ESXi的用户名和密码
+ ![](../../images/img_4528.png)
    1. 弹出安全警示确认后点击“是”并继续
+ ![](../../images/img_4529.png)
    1. 在这里会显示主机摘要，由于是在VMware       Workstation中进行，所以供应商和型号都显示的是VMware
+ ![](../../images/img_4530.png)
    1. 分配许可证
+ ![](../../images/img_4531.png)
    1. 在这里选择默认就行
+ ![](../../images/img_4532.png)
    1. 确认配置后点击完成即可添加
+ ![](../../images/img_4533.png)
    1. 该ESXi主机摘要显示如下
+ ![](../../images/img_4534.png)
    1. 在VCSA上给另一台ESXi添加存储，进入该主机的配置页，添加软件iSCSI适配器
+ ![](../../images/img_4535.png)
    1. 弹出警示窗口，确认后点击“确定”即可
+ ![](../../images/img_4536.png)
    1. 添加后显示如下
+ ![](../../images/img_4537.png)
    1. 添加iSCSI target
+ ![](../../images/img_4538.png)
    1. 在弹出的窗口中写入iSCSI存储服务器IP
+ ![](../../images/img_4539.png)
    1. 查看存储设备是否已连接成功
+ ![](../../images/img_4540.png)

# 五、虚拟化相关理论
    1. 虚拟化本质特点
    - 分区：每个虚拟机相互独立，互不影响
    - 隔离：各个虚拟机计算、存储、网络资源隔离，互不影响
    - 封装：每个虚拟机封装成vmfs独立的文件
    - 解耦：将硬件解耦，提高兼容性
+ ![](../../images/img_4541.png)
    2. vcenter server管理平台
+ ![](../../images/img_4542.png)
    2. vcenter       client
+ ![](../../images/img_4543.png)

