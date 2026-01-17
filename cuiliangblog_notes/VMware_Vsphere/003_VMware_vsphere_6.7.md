# VMware vsphere 6.7

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:07:48+08:00
> 更新时间: 2026-01-12T14:30:26.619871+08:00
> 阅读量: 1234 | 点赞: 0

---

VMware vsphere 6.7 虚拟化平台搭建及配置

<font style="color:#000000;"></font>

 

目录

[VMware vsphere 6.7 虚拟化平台搭建及配置](#_Toc11341451)

[目录](#_Toc11341452)

[一、       环境规划与准备](#_Toc11341453)

[1.    环境规划](#_Toc11341454)

[2.    软件包准备](#_Toc11341455)

[二、       安装EXSI 6.7](#_Toc11341456)

[1.    创建虚拟机](#_Toc11341457)

[2.    开启虚拟机，安装ESXI](#_Toc11341458)

[3.    配置服务器IP地址](#_Toc11341459)

[4.    浏览器登录ESXI，进行相关设置](#_Toc11341460)

[三、       安装VCSA 6.7](#_Toc11341461)

[1.    下载文件并运行安装向导](#_Toc11341462)

[2.    部署设备](#_Toc11341463)

[3.    设置设备](#_Toc11341464)

[4.    浏览器登录VCSA，进行相关设置](#_Toc11341465)

[5.    添加root用户管理员权限](#_Toc11341466)

[6.    创建虚拟主机](#_Toc11341467)

 

 

<font style="color:#000000;"></font>

 

# 一、环境规划与准备
## 1.   环境规划
| 角色 | CPU | 内存 | 磁盘 | IP |
| --- | --- | --- | --- | --- |
| EXSI-1 | 4 | 4 | 10 | 192.168.1.202 |
| EXSI-2 | 4 | 4 | 10 | 192.168.1.201 |
| VCSA | 8 | 10 | 40 | 192.168.1.200 |


## 2.   <font style="color:white;">软件包准备</font>
1)      EXSI与VCSA下载

[https://my.vmware.com/cn/web/vmware/info/slug/datacenter_cloud_infrastructure/vmware_vsphere/6_7](https://my.vmware.com/cn/web/vmware/info/slug/datacenter_cloud_infrastructure/vmware_vsphere/6_7)

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466498868-7c5a6e47-99c3-40ed-b321-0d8d623d91d7.png)

# 二、安装EXSI 6.7
## 1.    创建虚拟机
![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466499117-e25e2b1b-d4db-45f9-88d6-3ea2c5a52a9a.png)

## 2.   开启虚拟机，安装ESXI
1)       开启电源

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466499328-05cbfe1e-5b97-47eb-8b05-9cac97d50c63.png)

2)       选择ESXI启动项

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466499585-4f19c934-4ff1-42f9-ac40-fadc4681832e.png)

3)       等待完成加载

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466499781-67a0bffe-891c-495d-8990-b01decddf598.png)

4)       系统欢迎界面，按回车继续

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466499981-9b108444-2f75-4602-ac95-42ff9f452906.png)

5)       在该安装许可协议界面，按下F11以继续

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466500179-9a97126f-cbb2-4224-bbad-4c47069253fc.png)

6)       系统会自动检查可用存储设备，之后在该界面选择安装的磁盘位置，回车以继续

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466500449-3ab7a1d2-5b6a-4392-8d7c-1ad4f612d4d9.png)

7)       选择US default(美式)键盘

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466500809-712634bc-82d3-49e8-a0d6-914a5c63e660.png)

8)       继续，输入root密码;注意密码最少为7位。（123.com）

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466501090-802db45a-9a26-4ded-b93b-b2fb542475e2.png)

9)       配置完所有信息后来到该界面，按下F11以开始安装

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466501299-7059ac49-cecc-44a4-af64-f7f159611a60.png)

10)    安装完成后，在该界面回车以重启

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466501606-9302a75f-b008-4b77-8263-fc6bc33aee08.png)

<font style="color:#2F2F2F;">11)  </font><font style="color:black;">重启完成后进入主界面</font>

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466501950-df01e573-fb55-4d6a-b565-240df8662323.png)

## 3.   配置服务器IP地址
1)      按下F2键弹出登陆界面

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466501950-df01e573-fb55-4d6a-b565-240df8662323.png)

2)      在弹出的登陆界面输入root账号、密码，回车登陆

 

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466502222-13f35018-003a-4c16-99f9-d61278d918cc.png)

3)      选择 "Configure Management Network"

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466502443-f29338c6-4356-4c59-a2fc-73e0eb442d32.png)

<font style="color:#2F2F2F;">l  </font>**<font style="color:#2F2F2F;">选项作用：</font>**<font style="color:#2F2F2F;">Configure Password </font><font style="color:#2F2F2F;">配置</font><font style="color:#2F2F2F;">root</font><font style="color:#2F2F2F;">密码</font><font style="color:#2F2F2F;">Configure Management Network </font><font style="color:#2F2F2F;">配置网络</font><font style="color:#2F2F2F;">Restart Management Network   </font><font style="color:#2F2F2F;">重启网络</font><font style="color:#2F2F2F;">Test Management Network </font><font style="color:#2F2F2F;">使用</font><font style="color:#2F2F2F;">ping</font><font style="color:#2F2F2F;">测试网络</font><font style="color:#2F2F2F;">Network Restore Options   </font><font style="color:#2F2F2F;">还原配置</font><font style="color:#2F2F2F;">Troubleshooting Options  </font><font style="color:#2F2F2F;">故障排查选项</font><font style="color:#2F2F2F;">View System Logs </font><font style="color:#2F2F2F;">查看系统日志</font><font style="color:#2F2F2F;">Reset System Conf iguration ESXi </font><font style="color:#2F2F2F;">出厂设置</font>

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466502733-2df59c9b-f935-479a-a597-976f3e70f995.png)

4)      修改IP地址

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466502938-7637160a-bda1-47e2-aa35-b8dd81077ccb.png)

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466503174-ce0d94fd-911d-4d39-bb83-dc3e912b4156.png)

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466503449-6b61c659-64f2-4891-b94d-a8bdb2fc9b41.png)

5)   配置完成

## 4.   浏览器登录ESXI，进行相关设置
1)   登录ESXI管理界面

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466503741-77a6b7c9-aeb2-40d5-b287-0d96bf9294bb.png)

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466504004-7bc5e896-9343-490d-ae8e-d5b43566f4d9.png)

<font style="color:#2F2F2F;">2)      </font><font style="color:black;">激活</font><font style="color:black;">ESXI</font><font style="color:black;">，主机</font><font style="color:black;">-></font><font style="color:black;">管理</font><font style="color:black;">-></font><font style="color:black;">许可</font>

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466504251-56c942ec-18d4-41f6-85a6-c63aaac4ee25.png)

<font style="color:#2F2F2F;">l  </font><font style="color:#2F2F2F;">许可账号：</font><font style="color:#2F2F2F;">HV4WC-01087-1ZJ48-031XP-9A843</font>

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466504494-917d9a5b-9be9-4946-9ef6-ab85c98cfcd2.png)

# 三、安装VCSA 6.7
## 1.   下载文件并运行安装向导
1)      下载VMware-VCSA文件，用虚拟光驱挂载或者解压运行，选择“安装”

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466504780-5353de80-0475-46f1-a5be-862903e5da49.png)

2)      进入安装程序向导

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466505056-cd117db1-3504-4a14-9701-567ef27292b7.png)

## 2.   部署设备
1)      点击安装，接着点击下一步进行部署设备

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466505319-1adc2b27-2aa7-43fc-ba3f-aaa607e78ab9.png)

2)      勾选“我接受许可协议条款”。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466505619-13ccc8d9-3497-46e4-b151-4fd7569515fe.png)

3)      选择“嵌入式PSC”

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466505831-eb578381-6c7e-46ea-9835-5f90b4fbd841.png)

4)      指定VCSA 6.7部署到ESXi主机或VC。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466506263-f7837f0c-0862-45b8-9e7c-ff01979041c9.png)

5)      提示证书警告，选择“是”。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466506527-374d4f6d-d9e0-4505-a1ef-fba9e22a9e6d.png)

6)      设置VCSA管理密码

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466506809-2ecb5ea1-be89-4b64-9e8a-b8dc1bd2534d.png)

7)      选择部署大小。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466507145-a886bf8f-8d1a-49df-9194-27924c4f1229.png)

8)      选择VCSA 6.7虚拟机存储。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466507428-698b8f3e-9a16-45cf-bec0-7fbeb9182f58.png)

9)      第12步，配置VCSA 6.7虚拟机网络。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466507702-41920d7d-8bf1-4d00-9745-9d376fc67912.png)

10)    确认第1阶段参数。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466508004-3321d1f4-3c41-4e48-aec7-ac0c8709150f.png)

11)    开始第一阶段部署。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466508278-9a00d4f5-c820-4b6a-80b1-88bec18c767a.png)

12)    完成第一阶段部署，开始第二阶段部署。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466508539-4b2dc5ac-b9ad-4569-b952-71b2c9783254.png)

## 3.   设置设备
1)      开始第二阶段配置。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466508807-f3d00e8c-d7e6-4c51-8c73-8c5659ee191c.png)

2)      配置NTP服务器。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466509159-6c1cf2f8-74b9-4d72-8e22-0ed4e9ab58bb.png)

3)      配置SSO参数。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466509437-e57840cf-eebf-45d4-a1fb-bc2177ef7cd8.png)

4)      确认是否加入CEIP。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466509749-6b19bc46-c890-4b62-a1f8-a5b60896851c.png)

5)      确认参数。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466510016-7c2e7551-15f2-4159-9168-f0bb4363e54d.png)

6)      确定开始第二阶段部署。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466510308-7a7ff9a1-9102-4fc2-9255-4038b5a84a14.png)

7)      开始配置。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466510626-aa123e19-3fab-49b6-b5b9-e71e622776b2.png)

8)      服务启动。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466510911-82960920-b8bd-4d88-b1ad-75160dfd208a.png)

9)      查看VCSA 6.7虚拟机控制台。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466511256-5e50c3e2-4072-4282-938d-31ffaf37073f.png)

## 4.   浏览器登录VCSA，进行相关设置
1)      VCSA登录。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466511573-4012cb96-758a-4dcc-aa49-a06875920a29.png)

2)      HTML5主界面。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466511836-d02ccea4-c15b-46a5-8da3-fae881fc5a2d.png)

3)      添加主机

## 5.   添加root用户管理员权限
1)      登陆用vcenter，打到系统管理并打开

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466512131-a9f156a6-a313-4181-93c6-527271b5a790.png)

2)      点击Single Sign On 下的“用户和组”，在右边可以看到用户了

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466512389-83f3df59-f0d2-4beb-bdab-f0431491a0c7.png)

3)      其中用户分本地和域的用户

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466512623-e26ac291-47a4-4ecd-8e0d-b1353d8039eb.png)

4)      选择部署vcsa时域，然后开始添加用户

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466512866-478fd924-7869-4093-a6e5-97667d85ac34.png)

5)      设置用户名、密码等信息，确认完成用户添加。用户添加完成后需要授权才能使用。

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466513145-ca892273-bade-4669-804e-982e7a94766a.png)

6)      点击“全局权限”中的“+”开始添加授权

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466513423-81671330-4ab9-436a-8cdc-f53e497a86b5.png)

7)      选择要授权的用户，及要添加的权限

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466513617-304fc325-ed41-4ae3-bd1f-e8312735bbf9.png)

<font style="color:#333333;">8)      </font>用新建帐户登陆

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466513885-e3761054-3a3f-447f-ab8b-eb1744dd6d7f.png)

 

## 6.   创建虚拟主机
<font style="color:#333333;">1)      </font>点击虚拟机，创建虚拟机

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466514119-ae36e088-30be-4351-8dd9-6f0422f71274.png)

<font style="color:#333333;">2)      </font>选择虚拟机类型

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466514557-d7c0fd04-0ab6-4c7c-b57e-945107947d17.png)

3)   这里选Linux，版本选centos6(64位)![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466514868-c71db805-0367-4e23-b3eb-1a520cdd975a.png)

4)   先暂时选个存储，等下编辑替换为我们刚才上传的vmdk文件：![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466515130-61f8fa30-36c7-441a-9d22-36d1536d302e.png)

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466515510-582c7c9b-4bfb-42f4-b0c2-883c1242e286.png)

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466515750-12518ede-670d-417e-b421-ecabe7b70528.png)

5)   点完成，刷新一下就能看到刚建好的虚拟机了：

# 四、开启DRS与HA
## 1.   新建集群，添加主机
1)      要想实现DRS和HA功能，先新建群集，再把Esxi主机添加到集群中

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466516053-9b968ebd-6488-46cf-a3be-bbd66a85061c.png)

2)      给集群命名，并把DRS和vSphere HA功能打开，单击”确定“按钮

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466516312-2e707880-700a-4842-b445-42e8c90fd5f0.png)

3)      右击新建好的群集，单击”添加主机”

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466516599-a4cb715b-98e2-42be-89d1-68603f5c314e.png)

4)      选中现有的所有主机，单击”下一页“按钮直到完成即可

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466516853-f08bbd89-5875-4319-a4c8-6fd169e40119.png)

5)      成功把三台Esxi主机添加到群集

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466517060-e847708b-0dc9-4755-9fe8-ef3de5a711d1.png)

## 2.   配置DRS
1)      对群集的DRS功能编辑设置

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466517359-a41a4f14-f7b5-41df-a984-b984ec60e7f9.png)

2)      在“自动化”页面中，选择“全自动”

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466517635-ff5df753-05ac-4d11-8eac-3d656eb703df.png)

3)      在”其他选项”页面上，勾选“虚拟机分布”，单击“确定”按钮

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466517865-aca3079b-6258-4f1b-a628-b9f2e5175401.png)

4)      对HA功能进行编辑设置

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466518102-2188ac74-e2f5-41cf-a8e7-ebdd7b476adf.png)

5)      在“故障和响应”页面进行相对应的设置，单击”确定“按钮

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466518343-ad32a817-0811-4737-95ed-6b57a00ff866.png)

## 3.   配置HA
1)      对Proactive HA进行编辑设置

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466518638-7060bffe-2a8c-4ae6-b0ec-4030969342f1.png)

2)      开启Proactive HA功能，自动化级别选择”自动“，单击”确定”

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466518889-057a02d8-ce02-4ee1-8c8e-3ca103e2ae5c.png)

3)      验证HA功能，需要把虚拟机的存储迁移到共享存储服务器上。右击虚拟机VCSA,单击”迁移

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466519159-28c38840-724d-47e3-80f4-40b0b009785a.png)

4)      在”选择迁移类型”页面上，选择“仅更改存储”，单击”NEXT“按钮<font style="color:#3D464D;">  
</font>![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466519470-c370d404-cd8a-4168-93c1-f1d35df6c930.png)

5)      在“即将完成”页面中，单击“FINISH”按钮

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466519470-c370d404-cd8a-4168-93c1-f1d35df6c930.png)

6)      验证HA功能，先查看原Win7是运行在哪个Esxi主机上

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466519772-7fc78808-51d9-4b88-a6ff-395a51a54d57.png)

6)      <font style="color:#3D464D;">右击</font><font style="color:#3D464D;">”192.168.10.20“</font><font style="color:#3D464D;">主机，依次</font><font style="color:#3D464D;">”</font><font style="color:#3D464D;">维护模式</font><font style="color:#3D464D;">”-->”</font><font style="color:#3D464D;">进入维护模式</font><font style="color:#3D464D;">”</font>

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466520069-717ba32e-b3c7-4792-94c4-cdf1ce803e70.png)

7)      在”进入维护模式”页面上，单击”确定”按钮进入维护模式

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466520398-76accb9f-a8bd-4a07-8c1b-6dbd4681b6b0.png)

8)      <font style="color:#3D464D;">自动进入迁移</font>

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466520790-f12270b0-961d-4b74-9fe4-a893f2c4d022.png)

 


