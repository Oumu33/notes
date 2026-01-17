# 部署安装esxi与vcsa

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:37:33+08:00
> 更新时间: 2026-01-12T14:28:32.964167+08:00
> 阅读量: 1415 | 点赞: 0

---

# 一、架构拓扑
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469193764-89dd6821-f1f0-4597-b76d-4a96db4a9057.png)

# 二、esxi安装过程
    1. 下载ESXI6.5镜像和client客户端。
+ 将ISO写入到U盘或是刻录光盘然后启动安装。
    1. 开始安装，默认选择第一项，回车安装
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469168306-6fd30624-2619-4dfd-8e93-1201a302c9a4.png)
    1. 欢迎界面，回车，安装程序正在检测服务器硬件信息，如果不满足系统安装条件会跳出错误提示。检测完成之后会出现下面界面
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469168311-ad633d3b-6481-410b-9eed-d0c71bdb566a.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469183690-0d00faff-748c-426a-bf17-f0f331a87db4.png)
    1. 安装在本地，这里列出了服务器硬盘信息，默认回车，出现下面界面
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469172299-ebe98c38-9c7e-40a1-84f9-6f6017fcd129.png)
    1. 设置登录密码，服务器root账户密码设置（注意：密码长度7位以上
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469157569-e8cb816d-590f-4446-8b62-9901f1034929.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469168081-deeef3d2-565a-4bdb-8f92-2f7e23d6a527.png)
    1. 开始安装，按F11
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469153524-8988f3cb-c674-4b86-aad3-3994123f2965.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469144331-e6f2fb97-f18b-4104-a934-f001ae723b2e.png)
    1. 重启
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469196116-fae9d979-0548-4709-8774-f4e588ba4509.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469207013-80ec95c9-56fb-4435-bcbc-50ef65a2e892.png)
    1. 配置过程主要是配置网络，客户端可以登陆。以下是控制台主界面。
+ F2进入配置界面；F12关闭/重启系统，F2关闭确认键，F11重启确认键；Enter保存键，ESC取消键或退出键。
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469190006-99af13f1-6d91-4324-92a2-2306306eca99.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469211777-59951ff2-0f1a-4ec1-86f9-c8d275db1638.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469176272-5db9de27-d481-441c-9f9e-98f88a994eaf.png)
    1. 浏览器登录web管理界面
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469216510-432a7f3a-0470-40c7-84ed-ab7d6f601081.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469209838-25544e16-80e2-4c64-b3cd-5b2361bd018b.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469174982-73c38936-5055-4dfc-a2a0-cb57e929f514.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469205156-cc22fac0-2b55-4f74-8fa0-3fda4d3bd37c.png)

# 三、vcsa安装
    1. 挂载镜像文件（如果是在物理机中可以使用软碟通将镜像写入U盘或光盘）
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469190345-12d96bd4-3aa9-4bf8-b4c4-3b60f8e11783.png)
    1. 打开镜像文件， 选择“installer”打开安装程序
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469198207-44d3ce61-9ac3-4cb3-9892-950c5ccfffaf.png)
    1. 查看安装前的简介
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469199696-30d04ba9-993e-454d-9f5a-654346f84191.png)
    1. 选择需要进行的操作，由于我们本次安装是初次安装，所以选择“安装”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469177653-587720fb-8f3b-4ad6-afce-861bb90e4955.png)
    1. 接受许可，点击“下一步”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469197635-498d01bb-005b-4b10-843c-1443140afc91.png)
    1. 如何整个集群不是很大的情况下，使用嵌入式“Platform       Services Controller”即可
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469199090-10bc25cb-5cff-451d-91c4-647b9641605a.png)
    1. 输入ESXI主机的地址、端口号、用户名以及密码
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469194841-4f01355b-e9b3-42a5-8d56-49a9a5d1bfdb.png)
    1. 正在验证
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469199694-717b21f3-ee74-4b23-b868-c659eefc859b.png)
    1. 提示警告，我们知道该证书是安全的，所以选择“是”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469201575-74d6d2cb-6d34-4c59-b2ba-86de37948ffc.png)
    1. 输入虚拟机的密码（注：不是登录vCetner       Web界面的密码，是VCSA主机的密码）
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469192671-4a6d16a9-3057-4641-b236-1977c11f1f9b.png)
    1. 选择部署大小，请参考图片中的“部署大小所需资源”进行参考
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469197037-5cb387ae-e18f-44b5-9366-b09375fc7be9.png)
    1. 输入VCSA主机所用的网络、主机名、IP地址等信息，输入完成后点击“下一步”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469189504-c6c7329b-b35d-4475-b598-9c4ba273d589.png)
    1. 选择安装到ESXI主机中的哪个存储上，勾选图中的“启用精简磁盘模式”会实时占用磁盘空间，随着数据的增大，空间会占用的越来越多，如果不勾选则占用前方建议的全部空间，选择完成后点击“下一步”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469188232-78c39d64-b75b-4dc4-8ea0-754843569745.png)
    1. 确认安装信息，确认无误后点击“下一步”进行安装
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469190796-70fd0d8c-d7f6-45e0-bd98-85470a46c5a0.png)
    1. 正在安装中，耐心等待一会儿
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469172624-bbd790c7-44f8-41ef-a406-256b0a4bad18.png)
    1. 部署完成后是用来浏览器访问“[https://vcsa02.best.com:5480/](https://vcsa02.best.com:5480/)进行第二阶段的配置
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469195879-5aa7dae7-0f6b-4cd6-8591-c49fbcba8e95.png)
    1. 查看完简介后点击“下一步”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469196396-cb5c5ffb-1616-43d2-adab-2baede3551fa.png)
    1. 进行SSO配置，输入Single       Sign-On的域名，管理员密码以及站点名称，输入完成后点击“下一步”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469186805-cc097f18-33bb-4a10-ae4b-d998474064b7.png)
    1. 设置时间同步以及是否启用SSH访问
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469175676-dde446d1-4de3-42a5-9109-3956be8abb58.png)
    1. 确认主机信息，确认无误后点击“完成”
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469193852-56e7def4-bbd3-4dfa-babd-81aaa4c5e0de.png)
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469180473-31980f40-945f-414e-9512-df284646849f.png)
    1. 提示警告，如已确认填写信息无误，点击“确定”即可
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469200722-876e9248-919a-42b3-a0bf-8895e1fbb8e2.png)
    1. 稍等片刻
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469174424-120cb3aa-ed0c-4104-8b5b-3d0ced30dd56.png)
    1. 使用浏览器访问“[https://vcsa02.best.com/vsphere-client/](https://vcsa02.best.com/vsphere-client/)”登录到我们刚刚搭建完成的Linux版本的vCenter       Server，会提示连接不安全，但是我们确认服务器是安全的，所以点击“高级”进行跳过（SSL证书的问题后面会有专文进行介绍以及配置，文档完成后会链接到此处）
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469203970-f3549e15-f85c-4f9b-9f13-882814377908.png)
    1. 用于vCenter       Web需要用到Flush插件，所以点击途中标注的地方，启用插件（仅限谷歌、火狐等浏览器，部分浏览器需要下载并安装Flush插件）
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469203094-ad07630b-2635-4642-874c-638755aad313.png)
    1. 谷歌浏览器点击“启用”即可
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469204008-0ba00f8a-f23c-41a5-bda4-c2c9e07413b3.png)
    1. 输入Single       Singn-On的用户名密码即可登录到vCenter Server
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469202327-e4ba0696-2859-4095-98af-b6b6200c3530.png)
    1. 登录成功
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469206069-b7baef34-112e-4d33-929a-a75c56d72237.png)

# 四、添加主机以及存储
    1. 开始创建数据中心
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469174572-737c5e57-8bdb-4faf-94eb-7e71c98a2830.png)
    1. 创建数据中心
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469197414-7bab627b-bf21-453b-af18-550419285301.png)
    1. 在这里先创建群集
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469195093-881e8494-fac8-4168-be00-e5e1e360286b.png)
    1. 在弹出的页面输入群集名并根据需要开启相关特性
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469137402-ad2b6532-e808-4bde-b262-e486456c73c4.png)
    1. 添加主机
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469188642-f85137b1-1c2f-4635-b2e4-3f836a98b727.png)
    1. 添加主机名或IP地址
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469147489-4316e668-8dc4-41b8-bc8b-eaf900f59f5b.png)
    1. 输入该ESXi的用户名和密码
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469147471-dae69f23-e40d-49c7-a851-227a15320c20.png)
    1. 弹出安全警示确认后点击“是”并继续
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469156417-ec6d5925-da45-4c27-8b15-2b21487530b2.png)
    1. 在这里会显示主机摘要，由于是在VMware       Workstation中进行，所以供应商和型号都显示的是VMware
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469149557-23ae3e46-9ca2-456f-9527-5a2d631b9813.png)
    1. 分配许可证
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469159247-053cd97c-6d9b-4237-ac93-91c1c9ed119f.png)
    1. 在这里选择默认就行
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469159288-c71516b8-fed8-4d31-94b0-80e33369be15.png)
    1. 确认配置后点击完成即可添加
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469149577-d5c134bb-ca53-4fa9-89e4-0ce46c67a28f.png)
    1. 该ESXi主机摘要显示如下
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469173547-f26f3243-9900-4cbf-a5ac-9b7b29b4087e.png)
    1. 在VCSA上给另一台ESXi添加存储，进入该主机的配置页，添加软件iSCSI适配器
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469162567-a0d4b450-3125-4d3c-ac54-87b05a9ba998.png)
    1. 弹出警示窗口，确认后点击“确定”即可
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469143517-7fb3864f-8751-4e29-9f37-eec1415065a2.png)
    1. 添加后显示如下
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469152541-d83d581b-4a80-4ab4-ae6a-957cd2270aa7.png)
    1. 添加iSCSI target
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469141028-42a9ee98-772b-4788-b8b9-50b39f92638a.png)
    1. 在弹出的窗口中写入iSCSI存储服务器IP
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469143560-a36f192a-4fe1-4060-88bc-0da573eeb01f.png)
    1. 查看存储设备是否已连接成功
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469165083-6da0e273-9b2d-4f34-96fd-61dbcdb63b44.png)

# 五、虚拟化相关理论
    1. 虚拟化本质特点
    - 分区：每个虚拟机相互独立，互不影响
    - 隔离：各个虚拟机计算、存储、网络资源隔离，互不影响
    - 封装：每个虚拟机封装成vmfs独立的文件
    - 解耦：将硬件解耦，提高兼容性
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469215248-243350dc-6145-45a7-a6ca-ae079d178aa7.png)
    2. vcenter server管理平台
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469214434-24b11690-3665-400f-a22f-a843ea841c11.png)
    2. vcenter       client
+ ![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613469213992-dc53244f-e249-4afd-bc9b-ce9cf3c98262.png)


