# jenkins基本设置

> 分类: CI/CD > Jenkins基础配置
> 更新时间: 2026-01-10T23:33:56.293388+08:00

---

#  初始化设置
## 获取管理员密码
```bash
[root@tiaoban cicd]# cat /var/jenkins_home/secrets/initialAdminPassword
0ce189b4fad94ad487ec3263a061a3be
```

## 安装推荐的插件
![](../../images/img_523.png)

## 创建管理员用户
也可以继续使用admin账号，在系统页面修改密码。

![](../../images/img_524.png)

## 配置jenkins地址
如果是docker或者rpm包方式部署，填写jenkins域名即可，如果是k8s部署，可以填写svc形式。即http://jenkins.cicd.svc:8080/

![](../../images/img_525.png)

# 使用配置
## 修改admin用户密码和时区
依次点击用户名——>Configure找到密码和时区设置

![](../../images/img_526.png)

## 修改插件安装源
修改为国内插件源地址，提高插件下载速度

[https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json](https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json)

![](../../images/img_527.png)

## 插件卸载
如果遇到插件异常导致jenkins系统无法使用，可以尝试卸载异常插件

```bash
# 停止jenkins服务
systemctl stop jenkins
# 删除插件目录下异常插件.jpi文件
rm -rf /var/jenkins_home/plugins/role-strategy.jpi
# 重启jenkins
systemctl start jenkins
```

