# RHEL9允许root远程登录

> 分类: Linux > RHEL8/9
> 更新时间: 2026-01-10T23:35:03.214029+08:00

---

<font style="color:rgb(38, 38, 38);">从centos9开始，默认禁止远程登录root用户，需要使用以下命令使他允许登录：</font>

```bash
vi /etc/ssh/sshd_config
```

<font style="color:rgb(38, 38, 38);">在文件中找到(可以使用搜索功能： 输入/Permit，找到后再按i进行编辑)</font>

```bash
#PermitRootLogin prohibit-password
更改为（# 要去掉）：按esc，输入:wq 保存。
PermitRootLogin yes
```

<font style="color:rgb(38, 38, 38);">重启ssh</font>

```bash
systemctl restart sshd
```



