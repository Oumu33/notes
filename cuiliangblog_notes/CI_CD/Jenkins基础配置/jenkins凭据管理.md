# jenkins凭据管理

> 分类: CI/CD > Jenkins基础配置
> 更新时间: 2026-01-10T23:33:56.507547+08:00

---

jenkins在持续部署过程中，经常需要密文存储各种凭据信息，例如harbor账号密码、数据库账号密码、git账号密码等信息，以便jenkins能与这些第三方应用进行集成交互。

# 安装插件
在jenkins的插件管理中安装Credentials Binding插件

![](../../images/img_517.png)

安装完成后，在jenkins菜单中可以看到凭证功能菜单

![](../../images/img_518.png)

# 凭据使用
## 创建凭据
依次点击jenkins——>系统管理——>Credentials——>全局凭据——> Add Credentials

![](../../images/img_519.png)

## 用户密码
用于使用用户名和密码验证，详细使用可参考jenkins通过http/https方式拉取gitlab代码配置，创建凭据内容如下：

![](../../images/img_520.png)

## SSH密钥
用于ssh密钥验证，详细使用可参考jenkins通过ssh认证拉取gitlab代码配置，创建凭据内容如下：

![](../../images/img_521.png)

## <font style="color:rgb(48, 49, 51);">Certificate</font>
用于存储<font style="color:rgb(48, 49, 51);">PKCS#12格式的pfx证书文件，详细使用可参考jenkins连接远程k8s集群配置，创建凭据内容如下：</font>

![](../../images/img_522.png)

其他凭据使用后续补充

