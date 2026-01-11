# VMware vsphere 6.7

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:07:48+08:00
> 更新时间: 2026-01-11T08:59:39.219668+08:00
> 阅读量: 1228 | 点赞: 0

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

![](https://via.placeholder.com/800x600?text=Image+f3d88633002e47cb)

# 二、安装EXSI 6.7
## 1.    创建虚拟机
![](https://via.placeholder.com/800x600?text=Image+fbf893534171be3c)

## 2.   开启虚拟机，安装ESXI
1)       开启电源

![](https://via.placeholder.com/800x600?text=Image+9b3111df9ffc4bc6)

2)       选择ESXI启动项

![](https://via.placeholder.com/800x600?text=Image+68c9c42c3377f5ed)

3)       等待完成加载

![](https://via.placeholder.com/800x600?text=Image+5c434385d8e34318)

4)       系统欢迎界面，按回车继续

![](https://via.placeholder.com/800x600?text=Image+bf0855ba83ed4421)

5)       在该安装许可协议界面，按下F11以继续

![](https://via.placeholder.com/800x600?text=Image+56c10b224d321c09)

6)       系统会自动检查可用存储设备，之后在该界面选择安装的磁盘位置，回车以继续

![](https://via.placeholder.com/800x600?text=Image+5f8787b437dcc418)

7)       选择US default(美式)键盘

![](https://via.placeholder.com/800x600?text=Image+ff7ec781697245d6)

8)       继续，输入root密码;注意密码最少为7位。（123.com）

![](https://via.placeholder.com/800x600?text=Image+bc4f7acee202957b)

9)       配置完所有信息后来到该界面，按下F11以开始安装

![](https://via.placeholder.com/800x600?text=Image+36f683a8f3b6fff2)

10)    安装完成后，在该界面回车以重启

![](https://via.placeholder.com/800x600?text=Image+146f1487ba83baf0)

<font style="color:#2F2F2F;">11)  </font><font style="color:black;">重启完成后进入主界面</font>

![](https://via.placeholder.com/800x600?text=Image+a4d5958944b28f65)

## 3.   配置服务器IP地址
1)      按下F2键弹出登陆界面

![](https://via.placeholder.com/800x600?text=Image+a4d5958944b28f65)

2)      在弹出的登陆界面输入root账号、密码，回车登陆

 

![](https://via.placeholder.com/800x600?text=Image+85f91f0fb1b6a182)

3)      选择 "Configure Management Network"

![](https://via.placeholder.com/800x600?text=Image+ba93567450db9d0e)

<font style="color:#2F2F2F;">l  </font>**<font style="color:#2F2F2F;">选项作用：</font>**<font style="color:#2F2F2F;">Configure Password </font><font style="color:#2F2F2F;">配置</font><font style="color:#2F2F2F;">root</font><font style="color:#2F2F2F;">密码</font><font style="color:#2F2F2F;">Configure Management Network </font><font style="color:#2F2F2F;">配置网络</font><font style="color:#2F2F2F;">Restart Management Network   </font><font style="color:#2F2F2F;">重启网络</font><font style="color:#2F2F2F;">Test Management Network </font><font style="color:#2F2F2F;">使用</font><font style="color:#2F2F2F;">ping</font><font style="color:#2F2F2F;">测试网络</font><font style="color:#2F2F2F;">Network Restore Options   </font><font style="color:#2F2F2F;">还原配置</font><font style="color:#2F2F2F;">Troubleshooting Options  </font><font style="color:#2F2F2F;">故障排查选项</font><font style="color:#2F2F2F;">View System Logs </font><font style="color:#2F2F2F;">查看系统日志</font><font style="color:#2F2F2F;">Reset System Conf iguration ESXi </font><font style="color:#2F2F2F;">出厂设置</font>

![](https://via.placeholder.com/800x600?text=Image+961e806d574ddac7)

4)      修改IP地址

![](https://via.placeholder.com/800x600?text=Image+60b3903c3162557d)

![](https://via.placeholder.com/800x600?text=Image+32ba2d0f06544bea)

![](https://via.placeholder.com/800x600?text=Image+14cef2f8ebf32ae6)

5)   配置完成

## 4.   浏览器登录ESXI，进行相关设置
1)   登录ESXI管理界面

![](https://via.placeholder.com/800x600?text=Image+5074a125d97e3aa2)

![](https://via.placeholder.com/800x600?text=Image+116fb0ffcad79e86)

<font style="color:#2F2F2F;">2)      </font><font style="color:black;">激活</font><font style="color:black;">ESXI</font><font style="color:black;">，主机</font><font style="color:black;">-></font><font style="color:black;">管理</font><font style="color:black;">-></font><font style="color:black;">许可</font>

![](https://via.placeholder.com/800x600?text=Image+62de4f220cae47c8)

<font style="color:#2F2F2F;">l  </font><font style="color:#2F2F2F;">许可账号：</font><font style="color:#2F2F2F;">HV4WC-01087-1ZJ48-031XP-9A843</font>

![](https://via.placeholder.com/800x600?text=Image+d87740c8707d5d32)

# 三、安装VCSA 6.7
## 1.   下载文件并运行安装向导
1)      下载VMware-VCSA文件，用虚拟光驱挂载或者解压运行，选择“安装”

![](https://via.placeholder.com/800x600?text=Image+92f11f0780cdb8f2)

2)      进入安装程序向导

![](https://via.placeholder.com/800x600?text=Image+dada2e9870f9064f)

## 2.   部署设备
1)      点击安装，接着点击下一步进行部署设备

![](https://via.placeholder.com/800x600?text=Image+318b00731181ae82)

2)      勾选“我接受许可协议条款”。

![](https://via.placeholder.com/800x600?text=Image+a6fc42f8f988a579)

3)      选择“嵌入式PSC”

![](https://via.placeholder.com/800x600?text=Image+c5b470d1785fcbbb)

4)      指定VCSA 6.7部署到ESXi主机或VC。

![](https://via.placeholder.com/800x600?text=Image+8364fe86fad4bcc3)

5)      提示证书警告，选择“是”。

![](https://via.placeholder.com/800x600?text=Image+6347cfc8dce3616f)

6)      设置VCSA管理密码

![](https://via.placeholder.com/800x600?text=Image+4be3f80502783dd3)

7)      选择部署大小。

![](https://via.placeholder.com/800x600?text=Image+850c80146b405175)

8)      选择VCSA 6.7虚拟机存储。

![](https://via.placeholder.com/800x600?text=Image+87ecfb42b88e33ef)

9)      第12步，配置VCSA 6.7虚拟机网络。

![](https://via.placeholder.com/800x600?text=Image+e1098226206d9ac0)

10)    确认第1阶段参数。

![](https://via.placeholder.com/800x600?text=Image+81967bd442d5bfec)

11)    开始第一阶段部署。

![](https://via.placeholder.com/800x600?text=Image+52f0af4869ec497f)

12)    完成第一阶段部署，开始第二阶段部署。

![](https://via.placeholder.com/800x600?text=Image+c80c343cb7185e42)

## 3.   设置设备
1)      开始第二阶段配置。

![](https://via.placeholder.com/800x600?text=Image+e71ab28d8c48f891)

2)      配置NTP服务器。

![](https://via.placeholder.com/800x600?text=Image+4ecb1771fca9d813)

3)      配置SSO参数。

![](https://via.placeholder.com/800x600?text=Image+e453f1f9c2c8d56a)

4)      确认是否加入CEIP。

![](https://via.placeholder.com/800x600?text=Image+f1c9773fbe458f26)

5)      确认参数。

![](https://via.placeholder.com/800x600?text=Image+b5343cf958d5c085)

6)      确定开始第二阶段部署。

![](https://via.placeholder.com/800x600?text=Image+20aa0d24b41e37f6)

7)      开始配置。

![](https://via.placeholder.com/800x600?text=Image+cf414b80ca47cb57)

8)      服务启动。

![](https://via.placeholder.com/800x600?text=Image+713a622414d77f3f)

9)      查看VCSA 6.7虚拟机控制台。

![](https://via.placeholder.com/800x600?text=Image+a0abfe08172547c6)

## 4.   浏览器登录VCSA，进行相关设置
1)      VCSA登录。

![](https://via.placeholder.com/800x600?text=Image+d298bb00de17d103)

2)      HTML5主界面。

![](https://via.placeholder.com/800x600?text=Image+a80099f9bc46917b)

3)      添加主机

## 5.   添加root用户管理员权限
1)      登陆用vcenter，打到系统管理并打开

![](https://via.placeholder.com/800x600?text=Image+f41bf54ef857a366)

2)      点击Single Sign On 下的“用户和组”，在右边可以看到用户了

![](https://via.placeholder.com/800x600?text=Image+efd06ba2b8eacdd5)

3)      其中用户分本地和域的用户

![](https://via.placeholder.com/800x600?text=Image+133010f5ad447132)

4)      选择部署vcsa时域，然后开始添加用户

![](https://via.placeholder.com/800x600?text=Image+f64d730201857f7a)

5)      设置用户名、密码等信息，确认完成用户添加。用户添加完成后需要授权才能使用。

![](https://via.placeholder.com/800x600?text=Image+0ce12f7ba1719a31)

6)      点击“全局权限”中的“+”开始添加授权

![](https://via.placeholder.com/800x600?text=Image+901692cacebe94ef)

7)      选择要授权的用户，及要添加的权限

![](https://via.placeholder.com/800x600?text=Image+e018c202ce319807)

<font style="color:#333333;">8)      </font>用新建帐户登陆

![](https://via.placeholder.com/800x600?text=Image+54215905c69ce072)

 

## 6.   创建虚拟主机
<font style="color:#333333;">1)      </font>点击虚拟机，创建虚拟机

![](https://via.placeholder.com/800x600?text=Image+8b5714cc746fcd8b)

<font style="color:#333333;">2)      </font>选择虚拟机类型

![](https://via.placeholder.com/800x600?text=Image+7e7ecbd682bed929)

3)   这里选Linux，版本选centos6(64位)![](https://via.placeholder.com/800x600?text=Image+d80849963bb06f74)

4)   先暂时选个存储，等下编辑替换为我们刚才上传的vmdk文件：![](https://via.placeholder.com/800x600?text=Image+7daa026acfa6f34a)

![](https://via.placeholder.com/800x600?text=Image+92857f33203bc385)

![](https://via.placeholder.com/800x600?text=Image+17e050429a61f396)

5)   点完成，刷新一下就能看到刚建好的虚拟机了：

# 四、开启DRS与HA
## 1.   新建集群，添加主机
1)      要想实现DRS和HA功能，先新建群集，再把Esxi主机添加到集群中

![](https://via.placeholder.com/800x600?text=Image+2bd4e9d869be054e)

2)      给集群命名，并把DRS和vSphere HA功能打开，单击”确定“按钮

![](https://via.placeholder.com/800x600?text=Image+f6b5c1f1d9795177)

3)      右击新建好的群集，单击”添加主机”

![](https://via.placeholder.com/800x600?text=Image+099c17e7577e71aa)

4)      选中现有的所有主机，单击”下一页“按钮直到完成即可

![](https://via.placeholder.com/800x600?text=Image+dd702e7ce56648b9)

5)      成功把三台Esxi主机添加到群集

![](https://via.placeholder.com/800x600?text=Image+c64c12c94d0760cc)

## 2.   配置DRS
1)      对群集的DRS功能编辑设置

![](https://via.placeholder.com/800x600?text=Image+454736c708391dd6)

2)      在“自动化”页面中，选择“全自动”

![](https://via.placeholder.com/800x600?text=Image+fc10d36899d36ae9)

3)      在”其他选项”页面上，勾选“虚拟机分布”，单击“确定”按钮

![](https://via.placeholder.com/800x600?text=Image+74cb85814b431bd9)

4)      对HA功能进行编辑设置

![](https://via.placeholder.com/800x600?text=Image+a0bd5f6d8570c441)

5)      在“故障和响应”页面进行相对应的设置，单击”确定“按钮

![](https://via.placeholder.com/800x600?text=Image+308e64939c490130)

## 3.   配置HA
1)      对Proactive HA进行编辑设置

![](https://via.placeholder.com/800x600?text=Image+9a9a92cbbf66cc56)

2)      开启Proactive HA功能，自动化级别选择”自动“，单击”确定”

![](https://via.placeholder.com/800x600?text=Image+2fff4adced4412d8)

3)      验证HA功能，需要把虚拟机的存储迁移到共享存储服务器上。右击虚拟机VCSA,单击”迁移

![](https://via.placeholder.com/800x600?text=Image+6c576a7bbfb903ca)

4)      在”选择迁移类型”页面上，选择“仅更改存储”，单击”NEXT“按钮<font style="color:#3D464D;">  
</font>![](https://via.placeholder.com/800x600?text=Image+84aa7c8125fdadcd)

5)      在“即将完成”页面中，单击“FINISH”按钮

![](https://via.placeholder.com/800x600?text=Image+84aa7c8125fdadcd)

6)      验证HA功能，先查看原Win7是运行在哪个Esxi主机上

![](https://via.placeholder.com/800x600?text=Image+eeb890effc971606)

6)      <font style="color:#3D464D;">右击</font><font style="color:#3D464D;">”192.168.10.20“</font><font style="color:#3D464D;">主机，依次</font><font style="color:#3D464D;">”</font><font style="color:#3D464D;">维护模式</font><font style="color:#3D464D;">”-->”</font><font style="color:#3D464D;">进入维护模式</font><font style="color:#3D464D;">”</font>

![](https://via.placeholder.com/800x600?text=Image+47b61829b03ecf67)

7)      在”进入维护模式”页面上，单击”确定”按钮进入维护模式

![](https://via.placeholder.com/800x600?text=Image+245a6af3ace4485b)

8)      <font style="color:#3D464D;">自动进入迁移</font>

![](https://via.placeholder.com/800x600?text=Image+00d492c5e6ac3320)

 


