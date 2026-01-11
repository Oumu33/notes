# RHEL9允许root远程登录

> 来源: Linux
> 创建时间: 2023-06-29T11:33:44+08:00
> 更新时间: 2026-01-11T09:43:18.900548+08:00
> 阅读量: 944 | 点赞: 0

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




